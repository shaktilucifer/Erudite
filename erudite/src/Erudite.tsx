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
