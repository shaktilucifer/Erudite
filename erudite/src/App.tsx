import "./App.css";
import { DailyBookData, Erudite } from "./Erudite.tsx";
import { BookDataEntryForm } from "./BookEntryForm.tsx";
import { CreateBook } from "./CreateBook.tsx";

function App() {
  return (
    <>
      <div><Erudite /></div>
      <div><CreateBook /></div>
      <div><BookDataEntryForm
        onSubmit={(dailyBookData: DailyBookData) =>
          "not implemented" + dailyBookData
        }
      /></div>
    </>
  );
}

export default App;
