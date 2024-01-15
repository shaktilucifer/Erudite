import { useState } from "react";
import "./BookEntryForm.less";
import { DailyBookData } from "./Erudite";

export interface BookDataEntryFormProps {}

export function BookDataEntryForm({}: BookDataEntryFormProps) {
  const [bookInfo, setBookInfo] = useState<DailyBookData>({
    name: "",
    id: 0,
    pageInfo: { start: 0, end: 0 },
  });

  return (
    <>
      Book name:
      <input
        key={"book_name"}
        type="text"
        value={bookInfo?.name}
        onChange={(e) =>
          setBookInfo((prev: DailyBookData) => {
            return { ...prev, name: e.target.value };
          })
        }
      />
      Start:
      <input
        key={"start_page"}
        type="text"
        value={bookInfo?.pageInfo.start}
        onChange={(e) =>
          setBookInfo((prev: DailyBookData) => {
            return { ...prev, pageInfo: {...prev.pageInfo, start: +e.target.value} };
          })
        }
      />
      End:{" "}
      <input
        key={"end_page"}
        type="text"
        value={bookInfo?.pageInfo.end}
        onChange={(e) =>
          setBookInfo((prev: DailyBookData) => {
            return { ...prev, pageInfo: {...prev.pageInfo, end: +e.target.value} };
          })
        }
      />
    </>
  );
}
