import { useEffect, useState } from "react";
import "./Erudite.css";

export interface DailyBookData {
  id: string | number;
  name: string;
  pageInfo: PageInfo;
  date: string;
}

export interface PageInfo {
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
      { id: "1", name: "Mark_of_Athena", pageInfo: { start: 113, end: 165 }, date: '11/11/2019' },
      { id: "1", name: "Mark_of_Athena", pageInfo: { start: 166, end: 219 }, date: '11/12/2022' },
    ]);
  }, []);
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
