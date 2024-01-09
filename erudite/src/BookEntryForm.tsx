import { useEffect, useState } from "react";
import './BookEntryForm.less';
import { DailyBookData } from "./Erudite";


export function BookEntryForm({}) {
    const [bookInfo, setBookInfo] = useState<DailyBookData>();

    return 
    <>
        {/* // add on change for these  */}
        Book name: <input key={'book_name'} type="text" value={bookInfo?.name} />
        Start: <input key={'start_page'} type="text" value={bookInfo?.pageInfo.start} />
        End: <input key={'end_page'} type="text" value={bookInfo?.pageInfo.end} />

    </>
}