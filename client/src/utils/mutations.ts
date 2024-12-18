import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  query getAllBooks {
    allBooks {
      title
      authors
    }
  }
`;
