import {CalendarEvent, EventType} from "./types";

export const fakeEvents: CalendarEvent[] = [
    {
        id: 1,
        eventType: EventType.PrimaryBid,
        title: "Primary: IWTS Qual_ EST 1",
        start: new Date(2022, 0, 11),
        end: new Date(2022, 0, 11),
        allDay: true
    },
    {
        id: 2,
        eventType: EventType.BackupBid,
        title: "Backup 1: IWTS Qual_ EST 1",
        start: new Date(2022, 0, 14),
        end: new Date(2022, 0, 15),
        allDay: true
    },
    {
        id: 3,
        eventType: EventType.BackupBid,
        title: "Backup 2: IWTS Qual_ EST 2",
        start: new Date(2022, 0, 11),
        end: new Date(2022, 0, 18),
        allDay: true
    },
    {
        id: 4,
        eventType: EventType.RangeMaintenance,
        title: 'Range Maintenance',
        start: new Date(2022, 0, 10),
        end: new Date(2022, 0, 18),
        allDay: true
    },    {
        id: 5,
        eventType: EventType.RangeMaintenance,
        title: 'Range Maintenance 2',
        start: new Date(2022, 0, 9),
        end: new Date(2022, 0, 18),
        allDay: true
    },    {
        id: 6,
        eventType: EventType.RangeMaintenance,
        title: 'Range Maintenance 3',
        start: new Date(2022, 0, 11),
        end: new Date(2022, 0, 16),
        allDay: true
    },
];