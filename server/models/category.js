const mongoose = require('mongoose')
const Schema = mongoose.Schema

// schema product
const CategorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})
const category = mongoose.model('category', CategorySchema)
module.exports = category