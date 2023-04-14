import { gql } from "@apollo/client";

export const getAuthorsQuery = gql`
  query GET_AUTHORS {
    authors {
      name
      id
    }
  }
`;

export const getBooksQuery = gql`
  query GET_BOOKS {
    books {
      name
      id
    }
  }
`;

export const addBookMutation = gql`
  # Increments a back-end Books and gets its resulting value
  mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export const getBookQuery = gql`
  query GET_CERTAIN_BOOK($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
      }
    }
  }
`;
