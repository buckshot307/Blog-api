const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  post: { type: Schema.Types.ObjectId, ref: 'Post' },
  text: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'User'}
},
{timestamps: true})

module.exports = mongoose.model('Comment', CommentSchema);