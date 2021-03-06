import React from "react";
import App from "../App.tsx";
import { Route, Routes } from "react-router-dom";
import BookSearchBar from "../BookSearchBar.tsx";
import ReadingChallenge from "../ReadingChallenge.tsx";
import BookGrid from "../BookGrid.tsx";

const APP_ROUTES = [
  {
    path: "/",
    key: "HOME",
    exact: true,
    component: <BookSearchBar />,
    displayName: "Home",
  },
  {
    path: "/reading-challenge",
    key: "READING_CHALLENGE",
    exact: true,
    component: <ReadingChallenge />,
    displayName: "Challenges",
  },
  {
    path: "/grid",
    key: "BOOK_GRID",
    exact: true,
    component: <BookGrid />,
    displayName: "Book Grid",
  },
  {
    path: "/newGrid",
    key: "BOOK_GRID",
    exact: true,
    component: <BookGrid />,
    displayName: "Book Grid",
  },
];

export default APP_ROUTES;

export function RouteRenderer({ appRoutes }) {
  return (
    <Routes>
      {appRoutes.map((route) => {
        return (
          <Route
            key={route.key}
            path={route.path}
            exact={route.exact}
            element={route.component}
          />
        );
      })}
    </Routes>
  );
}
