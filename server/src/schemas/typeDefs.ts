const typeDefs = `
  type Book {
    bookId: ID!
    title: String!
    authors: [String]
    description: String
    image: String
    link: String
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
    bookCount: Int
  }

  type Auth {
    token: ID! 
    user: User
  }

  input BookInput {
    bookId: String
    title: String!
    authors: [String]
    description: String
    image: String
    link: String
  }
  
  type Query {
    allUsers: [User]
    allBooks: [Book]
    userSearch(username: String, email: String, password: String): [User]
    bookSearch(title: String, authors: [String], description: String): [Book]
    getUser: User
  }

  type Mutation {
    _dummy: String
    createUser(username: String!, email: String!, password: String!, savedBooks: [BookInput]): Auth
    login(email: String!,password: String!): Auth
    saveBook(book: BookInput): User 
    deleteBook(bookId: String): User
    }
`;

export default typeDefs;
