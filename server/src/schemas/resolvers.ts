import { User } from "../models/index.js";
import { signToken, AuthenticationError } from "../services/auth.js";

// interface IUser {}
// interface IBook {}
// interface IUserQuery {}
// interface IBookQuery {}

const resolvers = {
  Query: {
    allUsers: async (): Promise<any[] | null> => {
      return User.find({});
    },

    // allBooks: async (): Promise<any[] | null> => {
    //   return Book.find({});
    // },

    userSearch: async (_: any, args: any): Promise<any[] | null> => {
      const { username, email, password } = args;

      const query: any = {};
      if (username) query.username = username;
      if (email) query.email = email;
      if (password) query.password = password;

      return User.find(query);
    },

    // bookSearch: async (_: any, args: any): Promise<any[] | null> => {
    //   const { title, authors, description } = args;

    //   const query: any = {};
    //   if (title) query.title = title;
    //   if (authors) query.authors = authors;
    //   if (description) query.description = description;

    //   return Book.find(query);
    // },
    getUser: async (_: any, _args: any, context: any): Promise<any> => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }

      throw new AuthenticationError("cound not authenicate user.");
    },
  },

  Mutation: {
    createUser: async (_: any, args: any): Promise<any> => {
      const user = await User.create(args);

      const token = signToken(user.username, user.email, user._id);

      return { token, user };
    },
    login: async (_: any, args: any): Promise<any> => {
      const { email, password } = args;
      const user = await User.findOne({ email: email });
      if (!user) {
        throw new AuthenticationError("Could not authenticate user.");
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Could not authenticate user.");
      }

      const token = signToken(user.username, user.email, user._id);

      return { token, user };
    },
    saveBook: async (_: any, args: any, context: any): Promise<any> => {
      if (!context.user) {
        throw new AuthenticationError("cound not authenicate user.");
      }

      const user = await User.findOne({ _id: context.user._id });

      if (!user) {
        throw new AuthenticationError("cound not authenicate user.");
      }

      const { book } = args;

      if (
        user.savedBooks.some(
          (savedBook: any) => savedBook.bookId === book.bookId
        )
      ) {
        throw new Error("Book is already saved.");
      }

      user.savedBooks.push(book);

      await user.save();

      return user;
    },
    deleteBook: async (_: any, args: any, context: any): Promise<any> => {
      if (!context.user) {
        throw new AuthenticationError("cound not authenicate user.");
      }

      const user = await User.findOne({ _id: context.user._id });

      if (!user) {
        throw new AuthenticationError("cound not authenicate user.");
      }

      const { bookId } = args;

      // Find the index of the book to be removed
      const bookIndex = user.savedBooks.findIndex(
        (savedBook: any) => savedBook.bookId === bookId
      );

      // Throw error if the book wasn't found
      if (bookIndex == -1) {
        throw new Error("Book is not found in the database.");
      }

      // Delete book from database
      user.savedBooks.splice(bookIndex, 1);
      await user.save();
      return user;
    },
  },
};

export default resolvers;
