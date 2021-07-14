import React from 'react';
import {render, screen} from '@testing-library/react';
import {BigCalendar} from "./BigCalendar";
import {EventType} from "./types";

describe('BigCalendar', () => {

    it('renders events', () => {
        const events = [
            {
                id: 1,
                eventType: EventType.PrimaryBid,
                title: "Take me to your leader, or I'll atomize your face",
                start: new Date(2012, 11, 12),
                end: new Date(2012, 11, 13),
                allDay: true
            },
            {
                id: 2,
                eventType: EventType.BackupBid,
                title: "Mejin needs glasses",
                start: new Date(2012, 11, 10),
                end: new Date(2012, 11, 25),
                allDay: true
            }
        ];
        render(<BigCalendar
            calendarEvents={events}
            defaultDate={new Date(2012, 11, 12)}/>)
        screen.getByText(/take me to your leader/i)
        // screen.getByText("Mejin")


    });

});
