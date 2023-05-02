const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const binsSchema = new Schema({
      last_req: {
          type: Number,
          required: true,
          default: (Math.floor(Date.now() / 1000))
      }
}, {
    collection: "Bins",
    timestamps: true,
});

const Bins = mongoose.model('Bins', binsSchema);

module.exports = Bins;