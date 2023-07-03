const mongoose = require('mongoose');

const TransporterSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    account_no: {
        type: String,
    },
    git: {
        type: String,
    },
    git_expiry: {
        type: String,
    },
    director: {
        type: String,
    },
    contact: {
        type: String,
    },
    country: {
        type: String,
    },
    city: {
        type: String,
    },
    address: {
        type: String,
    },
   
})


module.exports = mongoose.model('Transporter', TransporterSchema);