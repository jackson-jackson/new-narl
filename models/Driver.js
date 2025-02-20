const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DriverSchema = new Schema({
    name: String,
    rsvp: {type: String, default: ''},
    driverNumber: {type: Number, default: 000},
    team: {
        type: String,
        default: ''
    },
    guid: {
        type: String,
        default: ''
    },
    points: {
        type: Number,
        default: 0
    },
    wins: {
        type: Number,
        default: 0
    },
    fastestLaps: {
        type: Number,
        default: 0
    },
    careerLaps: {
        type: Number,
        default: 0
    },
    careerPoints: {
        type: Number,
        default: 0
    },
    careerWins: {
        type: Number,
        default: 0
    },
    careerFastestLaps:{
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: false
    },
    wdc: {
        type: Number,
        default: 0
    },
    position: {
        type: Number,
        default: 0
    },
    wcc: {
        type: Number,
        default: 0
    },
    teamHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Team',
            default: []
        }
    ]
});

const Driver = mongoose.model('Driver', DriverSchema);

module.exports = Driver;