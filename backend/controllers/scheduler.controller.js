const JobScheduler = require('../services/jobScheduler');
const Job = require('../models/Job');

exports.optimizeSchedule = async (req, res) => {
    try {
        const optimizedSchedule = await JobScheduler.optimizeSchedule();
        res.json(optimizedSchedule);
    } catch (error) {
        res.status(500).json({
            message: 'Error optimizing schedule',
            error: error.message
        });
    }
};

exports.getSchedule = async (req, res) => {
    try {
        const jobs = await Job.find()
            .populate('assignedCrane')
            .sort({ scheduledStartTime: 1 });
        res.json(jobs);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching schedule',
            error: error.message
        });
    }
};

exports.updateJob = async (req, res) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ).populate('assignedCrane');
        res.json(updatedJob);
    } catch (error) {
        res.status(500).json({
            message: 'Error updating job',
            error: error.message
        });
    }
};