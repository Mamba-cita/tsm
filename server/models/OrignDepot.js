const mongoose = require('mongoose');

const OriginDepotSchema = new mongoose.Schema({
    name: {
        type: String,
    }
})


module.exports = mongoose.model('Origin', OriginDepotSchema);