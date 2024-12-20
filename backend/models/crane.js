// File: backend/models/Crane.js
const mongoose = require('mongoose');

const craneSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    liftCapacity: { type: Number, required: true },
    currentLocation: {
        address: String,
        latitude: Number,
        longitude: Number
    },
    status: {
        type: String,
        enum: ['available', 'assigned', 'maintenance'],
        default: 'available'
    },
    nextAvailableTime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Crane', craneSchema);




