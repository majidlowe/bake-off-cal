import React from "react";
import {Calendar, dateFnsLocalizer, Views} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import {CalendarEvent, EventType} from "./types";

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
const MyToolBar: React.FC = () => <div>TRIC</div>

interface EventCalendarRBCProps {
    calendarEvents: CalendarEvent[],
    defaultDate: Date,
}

export const EventCalendarRBC: React.FC<EventCalendarRBCProps> = ({calendarEvents, defaultDate}) => {

    const [selectedEventId, setSelectedEventId] = React.useState<number>(1337);
    const [showDoubleClickMessage, setShowDoubleClickMessage] = React.useState(false);

    return (
        <div>
            <Calendar
               localizer={localizer}
                events={calendarEvents}
                style={{height: 900}}
                defaultDate={defaultDate}
                eventPropGetter={eventStyleGetter}
                views={[Views.MONTH, Views.WEEK]}
                onSelectEvent={event => setSelectedEventId(event.id)}
                onDoubleClickEvent={() => setShowDoubleClickMessage(!showDoubleClickMessage)}
                components={{toolbar: MyToolBar}}
            />
            <h1>{selectedEventId}</h1>
            {(showDoubleClickMessage) &&
            <h1>you double clicked an event</h1>}
        </div>
    );
}
