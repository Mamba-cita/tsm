const mongoose = require('mongoose');

const TrailerSchema = new mongoose.Schema({
    trailer_no: {
        type: String,
    },
    year: {
        type: String,
    },
    trailer_type: {
        type: String,
    },
    trailer_capacity: {
        type: String,
    },
    transporterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transporter',
    }
})


module.exports = mongoose.model('Trailer', TrailerSchema);