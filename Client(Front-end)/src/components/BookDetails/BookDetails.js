import { useQuery } from "@apollo/client";
import React from "react";
import { getBookQuery } from "../../queries/queries";

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: bookId },
  });
  console.log(data);
  if (loading) return null;
  if (error) return `Error! ${error}`;
  return (
    <div id="book-details">
      <p>OutPut book details here</p>
      {data ? (
        <div>
          <h2>{data.book.name}</h2>
          <p>{data.book.genre}</p>
          <p>{data.book.author.name}</p>
        </div>
      ) : null}
    </div>
  );
};

export default BookDetails;
