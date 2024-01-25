// petsModel.js
const mongoose = require('mongoose');
const scm = mongoose.Schema;

const pets = new scm({
    name: { type: String },
    jenis_hewan: { type: String },
    ras: { type: String },
    service: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'owners' }
});

module.exports = mongoose.model("pets", pets);
