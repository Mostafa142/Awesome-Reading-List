import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { getBooksQuery } from "../../queries/queries";
import BookDetails from "../BookDetails/BookDetails";

const BookList = () => {
  const [selectedBook, setSelectedBook] = useState("");
  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => (
          <li key={book.id} onClick={(e) => setSelectedBook(book.id)}>
            {book.name}
          </li>
        ))}
      </ul>
      <BookDetails bookId={selectedBook} />
    </div>
  );
};

export default BookList;
