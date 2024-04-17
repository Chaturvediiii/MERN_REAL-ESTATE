import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      default: 'uncategorized',
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    }
  },
  { timestamps: true }
);

postSchema.pre('remove', function(next) {
  const User = mongoose.model('User');
  User.updateOne({ _id: this.author }, { $pull: { posts: this._id } }, next);
});

const Post = mongoose.model('Post', postSchema);

export default Post;