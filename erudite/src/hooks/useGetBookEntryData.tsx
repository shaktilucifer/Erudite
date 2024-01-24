import React, { useEffect, useState } from "react";
import { DailyBookData } from "../Erudite";

export function useGetBookEntryData() {
  const [dataEntry, setDataEntry] = useState<DailyBookData[]>();
  useEffect(() => {
    fetch("/getBookEntry").then((response: DailyBookData[]) => {
      setDataEntry(response);
    });
  }, []);

  return { dataEntry };
}
