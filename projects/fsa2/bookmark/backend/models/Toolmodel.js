const mongoose = require('mongoose');
const { Schema } = mongoose;

const ToolSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    fevicon: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
})

const Tool = mongoose.model('tool', ToolSchema);
module.exports = Tool;