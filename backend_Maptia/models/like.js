const mongoose = require('mongoose')

const likeSchema = mongoose.Schema({

    likeId: { type: Number, required: true },
    blogId: { type: Number, required: true },
    userId: { type: Number, required: true },
    Fascinating: { type: String, required: true },
    Inspiring: { type: String, required: true },
    Adventurous: { type: String, required: true },
    Beautiful: { type: String, required: true },
    Enlightening: { type: String, required: true },
    ThoughtProvoking: { type: String, required: true },
    Entertaining: { type: String, required: true },
    HeartWarming: { type: String, required: true },
    JawDropping: { type: String, required: true },
    Moving: { type: String, required: true },
    Reflecting: { type: String, required: true },
    Remarkable: { type: String, required: true },
    Unusual: { type: String, required: true },
    Vivid: { type: String, required: true }
});

module.exports = mongoose.model('Like', likeSchema)