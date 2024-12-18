import {
  User,
  IUser,
  IUserQuery,
  Book,
  IBook,
  IBookQuery,
} from "../models/index.js";

const resolvers = {
  Query: {
    allUsers: async (): Promise<IUser[] | null> => {
      return User.find({});
    },

    allBooks: async (): Promise<IBook[] | null> => {
      return Book.find({});
    },

    userSearch: async (_: any, args: IUserQuery): Promise<IUser[] | null> => {
      const { username, email, password } = args;

      const query: IUserQuery = {};
      if (username) query.username = username;
      if (email) query.email = email;
      if (password) query.password = password;

      return User.find({
        username: username,
        email: email,
        password: password,
      });
    },

    bookSearch: async (_: any, _args: IBookQuery): Promise<IBook[] | null> => {
      return Book.find({});
    },
  },
};

export default resolvers;
