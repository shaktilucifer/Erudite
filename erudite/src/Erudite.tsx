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

export interface EruditeProps {
  dailyBookData?: DailyBookData[]; // make this unoptional
}

export function Erudite({dailyBookData = []}: EruditeProps) {
  return (
    <>
      {dailyBookData?.map((d: DailyBookData) => (
        <div>
          {d.name}: {`${d.pageInfo.start} - ${d.pageInfo.end}`}
        </div>
      ))}
    </>
  );
}
