import User from '../../../models/User';

export default {
  User:{
    fullName: (user)=>`${user.firstName} ${user.lastName}`,
  },
  Query: {
    users: async () => await User.find(),
    user: async (_,{ _id })=> await User.findById(_id),
  },
  Mutation: { 
    createUser: (_, { data } ) => User.create(data),
    updateUser: async (_,{ _id, data }) => await  User.findOneAndUpdate(_id, data, { new: true }),
    deleteUser: async (_,{ _id }) =>!!(await User.findOneAndDelete(_id)),
  },
}