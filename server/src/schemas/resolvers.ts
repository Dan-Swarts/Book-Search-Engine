import User, { IUser } from "../models/User.js";

const resolvers = {
  Query: {
    user: async (): Promise<IUser[] | null> => {
      return User.find({});
    },
  },
};

export default resolvers;
