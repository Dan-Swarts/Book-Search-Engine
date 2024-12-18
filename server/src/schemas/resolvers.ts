import { User, IUser, Book, IBook } from "../models/index.js";

const resolvers = {
  Query: {
    user: async (): Promise<IUser[] | null> => {
      return User.find({});
    },

    book: async (): Promise<IBook[] | null> => {
      return Book.find({});
    },
  },
};

export default resolvers;
