import React from "react";
import {Calendar, dateFnsLocalizer, Views} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import {CalendarEvent, EventType} from "./types";
import {fakeEvents} from "./fakeEvents";

const locales = {
    'en-US': require('date-fns/locale/en-US'),
}
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

const getEventBackgroundColor = (eventType: EventType): string => {
    if (eventType === EventType.RangeMaintenance) return '#A9AEB1';
    if (eventType === EventType.BackupBid) return '#73B3E7';
    return "#005EA2";
}

const eventStyleGetter = (event: CalendarEvent) => ({
    style: {
        backgroundColor: getEventBackgroundColor(event.eventType),
    }
})

export const BigCalendar: React.FC = () => (
    <div>
        <Calendar
            localizer={localizer}
            events={fakeEvents}
            style={{height: 900}}
            defaultDate={new Date(2022, 0, 1)}
            eventPropGetter={eventStyleGetter}
            views={[Views.MONTH, Views.WEEK]}
        />
    </div>
)
