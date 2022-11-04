const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({

       userid: { type: Number, required: true },
       blogName: { type: String, required: true },
       blockTitle: { type: String, required: true },
       blogContent: { type: String, required: true },
       blogImage: { type: String, required: true },
       category: { type: String, required: true },
       Country: { type: String, required: true },
       days: { type: String, required: true },
       readTime: { type: Number, required: true },
       bookMark: { type: Boolean, required: true }
});

module.exports = mongoose.model('blogTable', blogSchema)