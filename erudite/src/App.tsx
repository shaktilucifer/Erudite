import "./App.css";
import { DailyBookData, Erudite } from "./Erudite.tsx";
import { useState } from "react";
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
