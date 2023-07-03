const mongoose = require('mongoose');

const ComoditySchema = new mongoose.Schema({
    name: {
        type: String,
    }
})


module.exports = mongoose.model('Comodity', ComoditySchema);