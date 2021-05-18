const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        projectId: {
            type: String,
            unique: true,
            required: true,
        },
        name: {
            type: String,
            max: 50,
            min: 3,
            unique: true,
            required: true,
        },
        createdBy: {
            type: String,
            required: true,
        },
        numberOfDevices: {
            type: Number,
            default: 0,
            required: true,
        },
        labDocument: {
            type: String,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);