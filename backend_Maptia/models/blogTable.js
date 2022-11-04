const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
       // title:String
       userid: { type: Number, required: true },
       blogName: { type: String, required: true },
       blockTitele: { type: String, required: true },
       blogContent: { type: String, required: true },
       blogImage: { type: String, required: true },
       category: { type: String, required: true },
       blogedContry: { type: String, required: true }
});

module.exports = mongoose.model('blogTable', postSchema)