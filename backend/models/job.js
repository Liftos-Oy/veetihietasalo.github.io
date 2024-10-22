const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    clientName: { type: String, required: true },
    location: {
        address: { type: String, required: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    requiredCraneType: { type: String, required: true },
    minimumLiftCapacity: { type: Number, required: true },
    scheduledStartTime: { type: Date, required: true },
    estimatedDuration: { type: Number, required: true }, // in hours
    status: {
        type: String,
        enum: ['pending', 'assigned', 'in-progress', 'completed', 'cancelled'],
        default: 'pending'
    },
    priority: { type: Number, min: 1, max: 5, default: 3 },
    assignedCrane: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Crane'
    }
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);

