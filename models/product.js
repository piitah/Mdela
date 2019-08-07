const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create product schema
const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    des: {
        type: String,
        require: true
    },
    productImg: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

const product = mongoose.model('product', ProductSchema)

module.exports = product