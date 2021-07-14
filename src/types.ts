export interface CalendarEvent {
    id: number;
    title: string;
    start: Date;
    end: Date;
    allDay?: boolean;
    desc?: string;
    eventType: EventType;
}

export enum EventType {
    PrimaryBid = 'PRIMARY_BID',
    BackupBid = 'BACKUP_BID',
    RangeMaintenance = "RANGE_MAINTENANCE",
}