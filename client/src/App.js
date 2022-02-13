import "./App.css";
import InputForm from "./InputForm";
import BookSearchBar from "./BookSearchBar.tsx";
import ReadingChallenge from "./ReadingChallenge.tsx";
import { Routes, Route, Link } from "react-router-dom";
import APP_ROUTES, { RouteRenderer } from "./routes/routeConfig.js";
import { RouteLinks } from "./routes/RouteLinks.tsx";
import { NavBar } from "./NavBar.tsx";

function App() {
  return (
    <>
      <head>
        <title> Erudite </title>
      </head>
      
      <div className="App">
        <header className="App-header">
          <NavBar routeConfig={APP_ROUTES}/>

          {/* <BookSearchBar/>
          <InputForm /> */}
          {/* <ReadingChallenge /> */}
        </header>
        <RouteRenderer appRoutes={APP_ROUTES} />

      </div>
    </>
  );
}

export default App;
