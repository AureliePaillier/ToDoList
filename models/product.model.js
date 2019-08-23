const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Product avec maj car objet
let ProductSchema = new Schema({
    name: {type: String, required: true},
    prix: {type: Number, required: true},
})

module.exports = mongoose.model('Product', ProductSchema);