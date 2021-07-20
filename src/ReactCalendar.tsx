import React, {useState} from 'react';
import Calendar, {CalendarTileProperties} from 'react-calendar';
import {isAfter, isBefore, isSameDay} from "date-fns";
import {EventType} from "./types";
// @ts-ignore
// import Calendar from 'react-calendar/dist/entry.nostyle'


export const ReactCalendar = () => {

    const event ={
            id: 2,
            eventType: EventType.BackupBid,
            title: "Backup 1: IWTS Qual_ EST 1",
            start: new Date(2022, 0, 14),
            end: new Date(2022, 0, 18),
            allDay: true
        }

    // const datesToAddContentTo = [tomorrow, in3Days, in5Days];

    function tileContent({ date, view }: CalendarTileProperties) {

        // Add class to tiles in month view only
        if (view === 'month') {
            // Check if a date React-Calendar wants to check is on the list of dates to add class to
            // if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
            if (isAfter(date, event.start) && isBefore(date, event.end))
                return <div>{event.title}</div>
        }
        return null;
    }



    const [date, setDate] = useState(new Date(2022, 0));
    return (
        <Calendar
            onChange={() => {}}
            value={date}
            tileContent={tileContent}
        />
    );
};