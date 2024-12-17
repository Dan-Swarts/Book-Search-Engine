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
    user: [User]
  }

  type Mutation {
    _dummy: String
  }
`;

export default typeDefs;
