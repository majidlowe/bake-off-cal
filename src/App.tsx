import React from 'react';
import './App.css';
import {Calendar, dateFnsLocalizer, Views} from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import 'react-big-calendar/lib/css/react-big-calendar.css'

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

interface CalendarEvent {
    id: number,
    title: string;
    start: Date;
    end: Date;
    allDay?: boolean;
    desc?: string;
    eventType: EventType;
}

const getEventBackgroundColor = (eventType: EventType): string => {
    if (eventType === EventType.RangeMaintenance) return '#A9AEB1';
    if (eventType === EventType.BackupBid) return '#73B3E7';
    return "#005EA2";
}

enum EventType {
    PrimaryBid = 'PRIMARY_BID',
    BackupBid = 'BACKUP_BID',
    RangeMaintenance = "RANGE_MAINTENANCE",
}


const myEventsList: CalendarEvent[] = [
    {
        id: 1,
        eventType: EventType.PrimaryBid,
        title: "Primary: IWTS Qual_ EST 1",
        start: new Date(2022, 0, 11),
        end: new Date(2022, 0, 18),
        allDay: true
    },
    {
        id: 2,
        eventType: EventType.BackupBid,
        title: "Backup 1: IWTS Qual_ EST 1",
        start: new Date(2022, 0, 14),
        end: new Date(2022, 0, 21),
        allDay: true
    },
    {
        id: 3,
        eventType: EventType.BackupBid,
        title: "Backup 2: IWTS Qual_ EST 2",
        start: new Date(2022, 0, 11),
        end: new Date(2022, 0, 18),
        allDay: true
    },
    {
        id: 4,
        eventType: EventType.RangeMaintenance,
        title: 'Range Maintenance',
        start: new Date(2022, 0, 10),
        end: new Date(2022, 0, 18),
        allDay: true
    }
];
//
// let allViews = Object.keys(Views).map(k => Views[k])
//
// const ColoredDateCellWrapper = ({ children }) =>
//     React.cloneElement(React.Children.only(children), {
//         style: {
//             backgroundColor: 'lightblue',
//         },
//     })


const eventStyleGetter = (event: CalendarEvent) => ({
    style: {
        backgroundColor: getEventBackgroundColor(event.eventType),
    }
})


const MyCalendar: React.FC = () => (
    <div>
        <Calendar
            localizer={localizer}
            events={myEventsList}
            style={{height: 800}}
            defaultDate={new Date(2022, 0, 1)}
            eventPropGetter={eventStyleGetter}
            views={[Views.MONTH, Views.WEEK]}
        />
    </div>
)

function App() {
    return (
        <div className="App">
            <MyCalendar/>
        </div>
    );
}

export default App;
