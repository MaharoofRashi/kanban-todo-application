const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: true,
    },
    status: {
        type: String,
        enum: ["To-Do", "In Progress", "Done"],
        default: "To-Do",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model('Todo', TodoSchema);