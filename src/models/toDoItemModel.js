const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    
const ToDoItemSchema = new Schema(
    {
        description: { type: String, default: null },
        createdAt: { type: Date, default: Date.now },
        done: { type: Boolean, default: false }
    }
);

module.exports = {
    ToDoItemModel: mongoose.model('ToDoItemModel', ToDoItemSchema)
}
