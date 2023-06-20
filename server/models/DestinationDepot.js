const mongoose = require('mongoose');

const DestinationDepotSchema = new mongoose.Schema({
    name: {
        type: String,
    }
})


module.exports = mongoose.model('Destination', DestinationDepotSchema);