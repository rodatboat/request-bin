const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const binsSchema = new Schema({
    bid: {
        type: String,
        required: true
    },
    last_req: {
        type: Date,
        required: true,
        default: Date.now()
    }
}, {
    collection: "Bins",
    timestamps: true,
});

const Bins = mongoose.model('Bins', binsSchema);

module.exports = Bins;