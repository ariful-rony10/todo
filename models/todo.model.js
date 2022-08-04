const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    status: {
        type: String,
        required: true,
        enum: ['active', 'inactive']
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Todo', todoSchema)