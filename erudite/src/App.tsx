import "./App.css";
import { DailyBookData, Erudite } from "./Erudite.tsx";
import { BookDataEntryForm } from "./BookEntryForm.tsx";
import { CreateBook } from "./CreateBook.tsx";
import { useState } from "react";
import { Book } from "./hooks/useCreateBook.ts";
import { BookList } from "./BookList.tsx";

function App() {
  const [dailyBookData, setDailyBookData] = useState<DailyBookData[]>([]);
  return (
    <>
      <div>
        <Erudite dailyBookData={dailyBookData} />
      </div>
      <div>
        <CreateBook onSubmit={function (book: Book): void {
          throw new Error("Function not implemented.");
        } } />
      </div>
      <div>
        <BookDataEntryForm
          onSubmit={(dailyBookData: DailyBookData) => {
            setDailyBookData([dailyBookData]);
          }}
        />
      </div>
      <div>
      <BookList />
      </div>
    </>
  );
}

export default App;
