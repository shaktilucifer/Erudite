import "./App.css";
import APP_ROUTES, { RouteRenderer } from "./routes/routeConfig.js";
import { NavBar } from "./NavBar.tsx";

function App() {
  return (
    <>
      <head>
        <title> Erudite </title>
      </head>

      <div className="App">
        <header className="App-header">
          <NavBar routeConfig={APP_ROUTES} />
        </header>
        <body>
          <RouteRenderer appRoutes={APP_ROUTES} />
        </body>
      </div>
    </>
  );
}

export default App;
