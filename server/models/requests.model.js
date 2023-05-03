const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestsSchema = new Schema({
    bid: {
        type: String,
        required: true,
    },
    ip:{
        type: String,
        required:false,
    },
    path:{
        type: String,
        required:false,
    },
    method:{
        type: String,
        required:false,
    },
    raw_headers:{
        type: String,
        required:false,
    },
    headers:{
        type: String,
        required:false,
    },
    query:{
        type: String,
        required:false,
    },
    body:{
        type: String,
        required:false,
    },
}, {
    collection: "Requests",
    timestamps: true,
});

const Requests = mongoose.model('Requests', requestsSchema);

module.exports = Requests;