import {EventCalendarMobiScroll} from "./EventCalendarMobiScroll";
import {CalendarEvent} from "./types";
import {makeCalendarEvent} from "./dataMakers";
import {render, screen} from "@testing-library/react";
import {fakeEvents} from "./fakeEvents";
import {Eventcalendar} from "@mobiscroll/react";

describe('Event Calendar (Mobi Scroll)', function () {
    it('render calendar with events', () => {
        const someTestEvents: CalendarEvent[] = fakeEvents;
        // render(<EventCalendarMobiScroll calendarEvents={someTestEvents}
        //                                 defaultDate={new Date(2022, 0)}/>)
        render(<Eventcalendar/>)

        expect(screen.getByTitle("/range/i")).toBeInTheDocument();

    })
});