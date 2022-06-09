import Post from '../../../models/Post';
import User from '../../../models/User';

export default {
  Post: {
    author: async (post) => await User.findById(post.author), 
  },
  Query: {
    posts: async () => await Post.find(),
    post: async (_,{ _id })=> await Post.findById(_id),
  },
  Mutation: {
    createPost: (_,{ data }) => Post.create(data),
    updatePost: async (_,{ _id, data }) => await Post.findOneAndUpdate(_id, data, { new: true }),
    deletePost: async (_,{ _id }) =>!!(await Post.findOneAndDelete(_id)),
  },
}