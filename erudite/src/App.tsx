import "./App.css";
import { DailyBookData, Erudite } from "./Erudite.tsx";
import { BookDataEntryForm } from "./BookEntryForm.tsx";
import { CreateBook } from "./CreateBook.tsx";
import { useState } from "react";

function App() {
  const [dailyBookData, setDailyBookData] = useState<DailyBookData[]>([]);
  return (
    <>
      <div>
        <Erudite dailyBookData={dailyBookData} />
      </div>
      <div>
        <CreateBook />
      </div>
      <div>
        <BookDataEntryForm
          onSubmit={(dailyBookData: DailyBookData) => {
            setDailyBookData([dailyBookData]);
          }}
        />
      </div>
    </>
  );
}

export default App;
