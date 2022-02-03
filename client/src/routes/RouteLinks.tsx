import { Link } from "react-router-dom";

export function RouteLinks({ appRoutes }) {
  return (
    <>
      {appRoutes.map((route, index) => {
        return (
          <li>
            <Link to={route.path}>
              {route.key}({route.path})
            </Link>{" "}
          </li>
        );
      })}
    </>
  );
}
