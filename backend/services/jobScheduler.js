// File: backend/services/jobScheduler.js
const axios = require('axios');
const Job = require('../models/Job');
const Crane = require('../models/Crane');

class JobScheduler {
    async calculateTravelTime(origin, destination) {
        try {
            const response = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
                params: {
                    origins: `${origin.latitude},${origin.longitude}`,
                    destinations: `${destination.latitude},${destination.longitude}`,
                    key: process.env.GOOGLE_MAPS_API_KEY
                }
            });

            if (response.data.rows[0].elements[0].status === 'OK') {
                return Math.ceil(response.data.rows[0].elements[0].duration.value / 60);
            }
            
            return this.estimateTravelTime(origin, destination);
        } catch (error) {
            console.error('Google Maps API Error:', error);
            return this.estimateTravelTime(origin, destination);
        }
    }

    async calculateJobScore(job, crane) {
        let score = 0;

        // Priority score (0-40 points)
        score += (job.priority - 1) * 10;

        // Travel time score
        const travelTime = await this.calculateTravelTime(
            crane.currentLocation,
            job.location
        );
        score += (travelTime / 60) * 10;

        // Crane capacity score
        if (crane.liftCapacity < job.minimumLiftCapacity) {
            return Infinity; // Crane cannot handle this job
        }

        // Prefer cranes that aren't too oversized
        const capacityRatio = crane.liftCapacity / job.minimumLiftCapacity;
        score += Math.max(0, (capacityRatio - 1.5) * 10);

        return score;
    }

    async optimizeSchedule() {
        try {
            // Get all pending jobs
            const pendingJobs = await Job.find({
                status: 'pending',
                scheduledStartTime: { $gte: new Date() }
            }).sort({ priority: 1, scheduledStartTime: 1 });

            // Get available cranes
            const availableCranes = await Crane.find({
                status: 'available',
                nextAvailableTime: { $lte: new Date() }
            });

            const assignments = [];
            const jobScores = [];

            // Calculate scores for all valid combinations
            for (const job of pendingJobs) {
                for (const crane of availableCranes) {
                    const score = await this.calculateJobScore(job, crane);
                    if (score !== Infinity) {
                        jobScores.push({ job, crane, score });
                    }
                }
            }

            // Sort by score (lower is better)
            jobScores.sort((a, b) => a.score - b.score);

            // Make assignments
            const assignedCranes = new Set();
            const assignedJobs = new Set();

            for (const { job, crane, score } of jobScores) {
                if (!assignedCranes.has(crane._id.toString()) &&
                    !assignedJobs.has(job._id.toString())) {

                    assignments.push({ job, crane });
                    assignedCranes.add(crane._id.toString());
                    assignedJobs.add(job._id.toString());

                    // Update job and crane in database
                    await Job.findByIdAndUpdate(job._id, {
                        status: 'assigned',
                        assignedCrane: crane._id
                    });

                    await Crane.findByIdAndUpdate(crane._id, {
                        status: 'assigned',
                        nextAvailableTime: new Date(
                            job.scheduledStartTime.getTime() +
                            job.estimatedDuration * 60 * 60 * 1000
                        )
                    });
                }
            }

            return assignments;
        } catch (error) {
            console.error('Optimization error:', error);
            throw error;
        }
    }

    estimateTravelTime(origin, destination) {
        return Promise.resolve(undefined);
    }
}

module.exports = new JobScheduler();