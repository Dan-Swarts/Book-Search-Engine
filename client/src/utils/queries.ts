import { gql } from "@apollo/client";

export const QUERY_ALl_BOOKS = gql`
  query getAllBooks {
    allBooks {
      title
      authors
    }
  }
`;
