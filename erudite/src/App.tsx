import "./App.css";
import { DailyBookData, Erudite } from "./Erudite.tsx";
import { BookDataEntryForm } from "./BookEntryForm.tsx";
import { CreateBook } from "./CreateBook.tsx";

function App() {
  return (
    <>
      <Erudite />
      <br />
      <br />
      <CreateBook />
      <br />
      <br />
      <BookDataEntryForm
        onSubmit={(dailyBookData: DailyBookData) =>
          "not implemented" + dailyBookData
        }
      />
      <br />
      <br />
    </>
  );
}

export default App;
