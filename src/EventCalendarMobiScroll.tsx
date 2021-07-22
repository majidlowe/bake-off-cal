import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import {Eventcalendar, getJson, toast} from '@mobiscroll/react';
import {CalendarEvent, EventType} from "./types";
import {MbscCalendarEvent} from "@mobiscroll/react/dist/src/core/components/eventcalendar/eventcalendar";
import {MobiScrollHTML} from "./MobiScrollHTML";

const getEventBackgroundColor = (eventType: EventType): string => {
  if (eventType === EventType.RangeMaintenance) return '#A9AEB1';
  if (eventType === EventType.BackupBid) return '#73B3E7';
  return "#005EA2";
}

interface EventCalendarMobiScrollProps {
  calendarEvents: CalendarEvent[],
  defaultDate: Date,
}

export const EventCalendarMobiScroll: React.FC<EventCalendarMobiScrollProps> = ({calendarEvents, defaultDate}) => {
  const [selectedEventId, setSelectedEventId] = React.useState<number>(1337);
  const [showDoubleClickMessage, setShowDoubleClickMessage] = React.useState(false);

  const displayedEvents: MbscCalendarEvent[] = calendarEvents.map((fakeEvent) =>
    ({...fakeEvent, color: getEventBackgroundColor(fakeEvent.eventType)}))

  return (
    <>
      {/*<MobiScrollHTML/>*/}
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
        onEventDoubleClick={() => setShowDoubleClickMessage(!showDoubleClickMessage)}
        onEventClick={event => setSelectedEventId(event.event.id as number)}
      />
      <div>
        <h1>{selectedEventId}</h1>
        {(showDoubleClickMessage) &&
        <h1>you double clicked an event</h1>}
      </div>
    </>
  );
};