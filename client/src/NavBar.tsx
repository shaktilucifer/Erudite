import { RouteLinks } from "./routes/RouteLinks.tsx";

export function NavBar({ routeConfig }) {
  return (
    <>
      <RouteLinks appRoutes={routeConfig} />
    </>
  );
}
