const typeDefs = `
  type Book {
    _id: ID!
    title: string!
    authors: string[]
    description: string
    image: string
    link: string
  }
    
  type User {
    _id: ID!
    username: string!
    email: string!
    password: string!
    savedBooks: Book[]
    bookCount: Int
  }
  
  type Query {
    
  }

  type Mutation {

  }
`;

export default typeDefs;
