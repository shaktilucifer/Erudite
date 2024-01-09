import { useEffect, useState } from "react";
import "./Erudite.css";

interface DailyBookData {
  id: string | number;
  name: string;
  pageInfo: PageInfo;
}

interface PageInfo {
  start: number;
  end: number;
}

interface EruditeProps {
  dailyBookData?: DailyBookData[]; // make this unoptional
}

export function Erudite({dailyBookData = []}: EruditeProps) {
  let [data, setData] = useState<DailyBookData[]>(dailyBookData);
  // test data
  useEffect(() => {
    setData([
      { id: "1", name: "Mark_of_Athena", pageInfo: { start: 113, end: 165 } },
      { id: "1", name: "Mark_of_Athena", pageInfo: { start: 166, end: 219 } },
    ]);
  });
  return (
    <>
      {data.map((d) => (
        <div>
          {d.name}: {`${d.pageInfo.start} - ${d.pageInfo.end}`}
        </div>
      ))}
    </>
  );
}
