const typeDefs = `
  type Book {
    _id: ID!
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
    _id: ID!
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
  }

  type Mutation {
    _dummy: String
    createUser(username: String!, email: String!, password: String!, savedBooks: [BookInput]): Auth
  }
`;

export default typeDefs;
