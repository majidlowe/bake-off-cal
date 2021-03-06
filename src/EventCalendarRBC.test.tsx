import React from 'react';
import {EventCalendarRBC} from "./EventCalendarRBC";
import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {Calendar} from "react-big-calendar";
import {makeCalendarEvent} from "./dataMakers";

// jest.mock('react-big-calendar', () => ({
//     Calendar: jest.fn(() => null),
// }))

describe('BigCalendar', () => {
    it('passes events to a calendar component to render', () => {
        //arrange - come back and declare some stuff
        const someCalendarEvents = [makeCalendarEvent(), makeCalendarEvent({id: 2})];
        //act

        const someStartDate = makeCalendarEvent({title: "FiRST DaY bACK"}).start;
        render(<EventCalendarRBC calendarEvents={someCalendarEvents}
                                 defaultDate={someStartDate}/>)
        //assert
        expect(Calendar).toHaveBeenCalledWith(
            expect.objectContaining({
                calendarEvents: someCalendarEvents,
                defaultDate: someStartDate,
            })
        )

    });

    it('shows the id of the event when the user clicks on it', () => {
        const calendarEvent = makeCalendarEvent({
            id: 1234,
            title: "fuzzy wuzzy was a bear",
            start: new Date(2012, 11, 10),
            end: new Date(2012, 11, 10)
        });
        render(<EventCalendarRBC calendarEvents={[calendarEvent]} defaultDate={calendarEvent.start}/>);
        expect(screen.queryByText("1234")).not.toBeInTheDocument();
        const calendarEventLabel = screen.getByText("fuzzy wuzzy was a bear");

        userEvent.click(calendarEventLabel)
        expect(screen.getByText("1234")).toBeInTheDocument();
    });

    it('shows a message when user double clicks the event', () => {
        const calendarEvent = makeCalendarEvent({
            id: 1234,
            title: "fuzzy wuzzy was a bear",
            start: new Date(2012, 11, 10),
            end: new Date(2012, 11, 10)
        });
        render(<EventCalendarRBC calendarEvents={[calendarEvent]} defaultDate={calendarEvent.start}/>);
        expect(screen.queryByText("you double clicked an event")).not.toBeInTheDocument();

        const calendarEventLabel = screen.getByText("fuzzy wuzzy was a bear");
        userEvent.dblClick(calendarEventLabel)
        expect(screen.getByText("you double clicked an event")).toBeInTheDocument();
    });

    it('when we pass the toolbar prop it will replace the Header', () => {
        const calendarEvent = makeCalendarEvent({
            id: 1234,
            title: "fuzzy wuzzy was a bear",
            start: new Date(2012, 11, 10),
            end: new Date(2012, 11, 10)
        });

        render(<EventCalendarRBC calendarEvents={[calendarEvent]}
                                 defaultDate={calendarEvent.start}

        />);
        expect(screen.queryByText("you double clicked an event")).not.toBeInTheDocument();

        const calendarEventLabel = screen.getByText("fuzzy wuzzy was a bear");

        userEvent.dblClick(calendarEventLabel)
        expect(screen.getByText("you double clicked an event")).toBeInTheDocument();
    });


});
