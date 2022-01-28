import "./App.css";
import InputForm from './InputForm';
import BookSearchBar from "./BookSearchBar.tsx";
import ReadingChallenge from "./ReadingChallenge.tsx";
// import BookSearchBar from "./BookSearchBar";
function App() {
  return (
    <>
      <head>
        <title> Erudite </title>
      </head>
      <div className="App">
        <header className="App-header">
         {/* <BookSearchBar/>
          <InputForm /> */}
          <ReadingChallenge />
        </header>
      </div>
    </>
  );
}

export default App;
