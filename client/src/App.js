import "./App.css";
import InputForm from './InputForm';
import BookSearchBar from "./BookSearchBar.tsx";
import ReadingChallenge from "./ReadingChallenge.tsx";
// import BookSearchBar from "./BookSearchBar";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <head>
        <title> Erudite </title>
      </head>
      <Routes>
        <Route path='/' element={<ReadingChallenge/>} />
        <Route path='/bookSearch' element={<BookSearchBar/>} />
      </Routes>
      <div className="App">
        <header className="App-header">
         {/* <BookSearchBar/>
          <InputForm /> */}
          {/* <ReadingChallenge /> */}
        </header>
      </div>
    </>
  );
}

export default App;
