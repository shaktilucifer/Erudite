import { useState } from "react";
import "./App.css";
import { Erudite } from "./Erudite.tsx";
import { BookDataEntryForm } from "./BookEntryForm.tsx";

function App() {
  return (
    <>
      <Erudite />
      <BookDataEntryForm />
    </>
  );
}

export default App;
