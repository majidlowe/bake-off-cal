import React from 'react';
import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {EventCalendarMobiScroll} from "./EventCalendarMobiScroll";
import {fakeEvents} from "./fakeEvents";
import {EventCalendarReactCal} from "./EventCalendarReactCal";
import { EventCalendarRBC } from './EventCalendarRBC';

function App() {
    return (
        <div className="App">
            {/*<EventCalendarRBC calendarEvents={fakeEvents} defaultDate={new Date(2022,0)}/>*/}
            {/*<EventCalendarReactCal />*/}
            <EventCalendarMobiScroll calendarEvents={fakeEvents} defaultDate={new Date(2022,0)}/>
        </div>
    );
}

export default App;
