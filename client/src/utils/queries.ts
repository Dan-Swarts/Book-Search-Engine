import { gql } from "@apollo/client";

export const QUERY_ALl_BOOKS = gql`
  query getAllBooks {
    allBooks {
      title
      authors
    }
  }
`;

export const GET_ME = gql`
  query getme {
    getUser {
      username
      email
      savedBooks {
        title
        authors
        description
        image
      }
    }
  }
`;
