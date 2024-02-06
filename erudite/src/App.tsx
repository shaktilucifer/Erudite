import "./App.css";
import { DailyBookData, Erudite } from "./Erudite.tsx";
import { BookDataEntryForm } from "./BookEntryForm.tsx";
import { CreateBook } from "./CreateBook.tsx";
import { useState } from "react";
import { Book } from "./hooks/useCreateBook.ts";
import { BookList } from "./BookList.tsx";
import { Navbar } from "./navigation/Navbar.tsx";

function App() {
  const [dailyBookData, setDailyBookData] = useState<DailyBookData[]>([]);
  return (
    <>
      <Navbar />
      <div>
        <Erudite dailyBookData={dailyBookData} />
      </div>
      <div>
        <BookList />
      </div>
    </>
  );
}

export default App;
