const mongoose = require('mongoose');

const coinSchema = mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model('Coin', coinSchema);