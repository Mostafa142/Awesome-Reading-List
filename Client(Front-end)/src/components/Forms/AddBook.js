import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  addBookMutation,
  getAuthorsQuery,
  getBooksQuery,
} from "../../queries/queries";

const AddBook = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [mutateFunction, reeeee] = useMutation(addBookMutation);
  console.log("====================================");
  console.log(reeeee.data);
  console.log("====================================");
  const handleSubmit = (e) => {
    e.preventDefault();
    mutateFunction({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: getBooksQuery }],
    });
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        />
      </div>

      <div className="field">
        <label>Author:</label>
        <select
          onChange={(e) => {
            setAuthorId(e.target.value);
          }}
        >
          <option>Select Author</option>
          {data.authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddBook;
