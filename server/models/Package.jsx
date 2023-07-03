const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
    name: {
        type: String,
    }
})


module.exports = mongoose.model('Package', PackageSchema);