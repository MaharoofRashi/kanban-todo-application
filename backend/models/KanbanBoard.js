const mongoose = require('mongoose');

const ColumnSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Todo',
        }
    ]

})

const KanbanBoardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    columns: {
        type: [ColumnSchema],
        default: [
            {name: 'To-Do', tasks: []},
            {name: 'In Progress', tasks: []},
            {name: 'Done', tasks: []}
        ]
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('KanbanBoard', KanbanBoardSchema);