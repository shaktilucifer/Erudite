import logo from "./logo.svg";
import "./App.css";
import InputForm from './InputForm';
function App() {
  return (
    <>
      <head>
        <title> Erudite </title>
      </head>
      <div className="App">
        <header className="App-header">
          <h1>Erudite</h1>
          <InputForm />
        </header>
      </div>
    </>
  );
}

export default App;
