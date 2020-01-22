const { Schema, model } = require('mongoose');
const { ObjectId } = Schema;

const messageSchema = new Schema({
    message: { type: String },
    fecha_at: { type: Date },
    user_id: { type: ObjectId },
    chat_id: { type: ObjectId }
});

module.exports = model('Message', messageSchema);