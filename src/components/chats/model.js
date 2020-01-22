const { Schema, model } = require('mongoose');
const { ObjectId } = Schema;
const chatSchema = new Schema({
    name: { type: String },
    avatar: { type: String },
    ususarios: [{ type: ObjectId }]
});

module.exports = model('Chat', chatSchema);