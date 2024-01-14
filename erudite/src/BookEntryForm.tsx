import { useState } from "react";
import "./BookEntryForm.less";
import { DailyBookData } from "./Erudite";

export function BookDataEntryForm({}) {
  const [bookInfo, setBookInfo] = useState<DailyBookData>({
    name: "",
    id: 0,
    pageInfo: { start: 0, end: 0 },
  });

  return;
  <>
    {/* // add on change for these  */}
    Book name:{" "}
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
    Start:<input key={"start_page"} type="text" value={bookInfo?.pageInfo.start} />
    End: <input key={"end_page"} type="text" value={bookInfo?.pageInfo.end} />
  </>;
}
