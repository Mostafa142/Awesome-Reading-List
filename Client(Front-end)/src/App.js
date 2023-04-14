import AddBook from "./components/Forms/AddBook";
import BookList from "./components/Lists/BookList";

function App() {
  return (
    <div id="main">
      <h1>Awesome Reading LIST</h1>
      <BookList />
      <AddBook />
    </div>
  );
}

export default App;
