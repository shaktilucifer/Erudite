import logo from "./logo.svg";
import "./App.css";
import InputForm from './InputForm';
import BookSearchBar from "./BookSearchBar.tsx";
// import BookSearchBar from "./BookSearchBar";
function App() {
  return (
    <>
      <head>
        <title> Erudite </title>
      </head>
      <div className="App">
        <header className="App-header">
          <h1>Erudite</h1>
        {/*  <BookSearchBar /> */}
         <BookSearchBar/>
          <InputForm />
        </header>
      </div>
    </>
  );
}

export default App;
