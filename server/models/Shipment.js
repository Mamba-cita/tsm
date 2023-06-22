const mongoose = require('mongoose');

const ShipmentSchema = new mongoose.Schema({
    cargo_type: {
        type: String,
    },
    consignee: {
        type: String,
    },
    loading_date: {
        type: String,
    },
    last_loading_date: {
        type: String,
    },
    clearing_agent: {
        type: String,
    },
    origin_depot: {
        type: String,
    },
    destination_depot: {
        type: String,
    },
    loading_contact: {
        type: String,
    },
    offloading_contact: {
        type: String,
    },
    commodity: {
        type: String,
    },
    packaging_type: {
        type: String,
    },
    total_tons: {
        type: String,
    },
    cargo_rate: {
        type: String,
    },
    cargo_rate_type: {
        type: String,
    },
    payment_period: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Not Started', 'Inbound', 'Loading', 'Loaded Awaiting Docs', 'On Journey', 'Offloading', 'Completed', 'Invoiced', 'Paid']
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
    }
})


module.exports = mongoose.model('Shipment', ShipmentSchema);