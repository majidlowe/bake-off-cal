import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar'
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

class CalendarEvent {
    title: string;
    allDay: boolean;
    start: Date;
    endDate: Date;
    desc: string;
    resourceId?: string | undefined;
    tooltip?: string | undefined;

    constructor(_title: string, _start: Date, _endDate: Date, _allDay?: boolean, _desc?: string, _resourceId?: string) {
        this.title = _title;
        this.allDay = _allDay || false;
        this.start = _start;
        this.endDate = _endDate;
        this.desc = _desc || '';
        this.resourceId = _resourceId;
    }
}

const myEventsList: CalendarEvent[] = [];

const MyCalendar:React.FC = ( ) => (
    <div>
        <Calendar
            localizer={localizer}
            events={myEventsList}
            style={{height: 500}}
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
