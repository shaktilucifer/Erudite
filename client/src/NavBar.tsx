import { RouteLinks } from "./routes/RouteLinks.tsx";
import "./NavBar.css";

export function NavBar({ routeConfig }) {
  return (
    <div className="navBarWrapper">
      <RouteLinks appRoutes={routeConfig} />
    </div>
  );
}
