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
  
  type Query {
    allUsers: [User]
    allBooks: [Book]
    userSearch(username: String, email: String, password: String): [User]
    bookSearch(title: String, authers: [String], description: String): [Book]
  }

  type Mutation {
    _dummy: String
  }
`;

export default typeDefs;
