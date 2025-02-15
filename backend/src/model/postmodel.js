import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Makes it mandatory
    trim: true, // Removes whitespace
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
