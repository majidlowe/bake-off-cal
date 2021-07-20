import {CalendarEvent, EventType} from "./types";

export function makeCalendarEvent(partial: Partial<CalendarEvent> = {}): CalendarEvent {
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