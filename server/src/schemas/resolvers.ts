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

      return User.find(query);
    },

    bookSearch: async (_: any, args: IBookQuery): Promise<IBook[] | null> => {
      const { title, authors, description } = args;

      const query: IBookQuery = {};
      if (title) query.title = title;
      if (authors) query.authors = authors;
      if (description) query.description = description;

      return Book.find(query);
    },
  },
};

export default resolvers;
