import React from 'react';
import {BigCalendar} from "./BigCalendar";
import {CalendarEvent, EventType} from "./types";
import {shallow} from "enzyme";
import {Calendar} from "react-big-calendar";
import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

function makeCalendarEvent(partial: Partial<CalendarEvent> = {}): CalendarEvent {
    return {
        id: partial.id ?? 1,
        eventType: partial.eventType ?? EventType.PrimaryBid,
        start: partial.start ?? new Date(2012, 11, 12),
        end: partial.end ?? new Date(2013, 11, 13),
        title: partial.title ?? "some-calendar-event",
        allDay: partial.allDay ?? false,
        desc: partial.desc ?? "Hullabaloo",
    };
}

describe('BigCalendar', () => {
    it('passes events to a calendar component to render', () => {
        const events = [
            {
                id: 1,
                eventType: EventType.PrimaryBid,
                title: "Take me to your leader, or I'll atomize your face",
                start: new Date(2012, 11, 12),
                end: new Date(2012, 11, 13),
                allDay: true
            }
        ];
        const wrapper = shallow(<BigCalendar
            calendarEvents={events}
            defaultDate={new Date(2012, 11)}/>)

        const calendarComponent = wrapper.find(Calendar);
        expect(calendarComponent.props().events).toEqual(events);
    });

    it('shows the id of the event when the user clicks on it', () => {
        const calendarEvent = makeCalendarEvent({
            id: 1234,
            title: "fuzzy wuzzy was a bear",
            start: new Date(2012, 11, 10),
            end: new Date(2012, 11, 10)
        });
        render(<BigCalendar calendarEvents={[calendarEvent]} defaultDate={calendarEvent.start}/>);
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
        render(<BigCalendar calendarEvents={[calendarEvent]} defaultDate={calendarEvent.start}/>);
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

        render(<BigCalendar calendarEvents={[calendarEvent]}
                            defaultDate={calendarEvent.start}

        />);
        expect(screen.queryByText("you double clicked an event")).not.toBeInTheDocument();

        const calendarEventLabel = screen.getByText("fuzzy wuzzy was a bear");

        userEvent.dblClick(calendarEventLabel)
        expect(screen.getByText("you double clicked an event")).toBeInTheDocument();
    });


});
