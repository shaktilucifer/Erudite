import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import { BookList } from "./BookList.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} />
      <Route path="/books" element={<BookList />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
