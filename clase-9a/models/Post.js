import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  id: Number,
  title: String,
  content: String,
  author: String
});

const Post = mongoose.model('Post', PostSchema);


export default Post;
