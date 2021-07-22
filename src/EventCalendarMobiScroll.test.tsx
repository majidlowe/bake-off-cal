import {EventCalendarMobiScroll} from "./EventCalendarMobiScroll";
import {CalendarEvent} from "./types";
import {render, screen, within} from "@testing-library/react";
import {fakeEvents} from "./fakeEvents";

describe('Event Calendar (Mobi Scroll)', function () {
  it('render calendar with events', () => {
    const someTestEvents: CalendarEvent[] = fakeEvents;
    render(<EventCalendarMobiScroll
      calendarEvents={someTestEvents}
      defaultDate={new Date(2022, 0)}/>)
    const eventDate = screen.getByRole('gridcell',{name:/january 11/i})
    expect(within(eventDate).getByTitle(/primary/i)).toBeInTheDocument()
    // expect(screen.getAllByText("Primary: IWTS Qual_ EST 1")[0]).toBeInTheDocument();
  })
});