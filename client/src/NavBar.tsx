import { RouteLinks } from "./routes/RouteLinks.tsx";

export function NavBar({ routeConfig }) {
  return (
    <>
      <p>Pages available</p>
      <RouteLinks appRoutes={routeConfig} />
    </>
  );
}
