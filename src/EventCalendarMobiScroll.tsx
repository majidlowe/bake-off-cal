import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import {Eventcalendar, getJson, toast} from '@mobiscroll/react';
import {fakeEvents} from "./fakeEvents";
import {CalendarEvent, EventType} from "./types";
import {MbscCalendarEvent} from "@mobiscroll/react/dist/src/core/components/eventcalendar/eventcalendar";

const getEventBackgroundColor = (eventType: EventType): string => {
    if (eventType === EventType.RangeMaintenance) return '#A9AEB1';
    if (eventType === EventType.BackupBid) return '#73B3E7';
    return "#005EA2";
}

interface EventCalendarMobiScrollProps {
    calendarEvents:CalendarEvent[],
    defaultDate: Date,
}

export const EventCalendarMobiScroll: React.FC<EventCalendarMobiScrollProps> = ({calendarEvents, defaultDate}) => {

    const displayedEvents: MbscCalendarEvent[] = calendarEvents.map((fakeEvent) =>
        ({...fakeEvent, color: getEventBackgroundColor(fakeEvent.eventType)}))

    return (
        <>
            <Eventcalendar
                theme="ios"
                themeVariant="light"
                clickToCreate={false}
                dragToCreate={false}
                dragToMove={false}
                dragToResize={false}
                height={697}
                data={displayedEvents}
                view={{
                    calendar: {
                        labels: true,
                        //type: 'week',
                        //size: 1
                    }
                }}
                defaultSelectedDate={defaultDate}
            />
            {/*<div>Hello</div>*/}
        </>
    );
};