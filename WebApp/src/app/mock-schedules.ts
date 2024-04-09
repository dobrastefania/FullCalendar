import { Schedule } from "./schedule";

export const SCHEDULES: Schedule[] = [
    {
        id: 1,
        description: 'Wedding',
        type: 'Event',
        date: new Date('2021-09-25'),
        startTime: { hours: 12, minutes: 0 },
        endTime: { hours: 13, minutes: 0 },
        username: 'Daniel'
    },
    {
        id: 2,
        description: 'Birthday',
        type: 'Event',
        date: new Date('2021-09-26'),
        startTime: { hours: 12, minutes: 0 },
        endTime: { hours: 13, minutes: 0 },
        username: 'Karla'
    },
    {
        id: 3,
        description: 'Meeting',
        type: 'Task',
        date: new Date('2021-09-27'),
        startTime: { hours: 12, minutes: 0 },
        endTime: { hours: 13, minutes: 0 },
        username: 'Maria'
    },
    {
        id: 4,
        description: 'Conference',
        type: 'Event',
        date: new Date('2021-09-28'),
        startTime: { hours: 12, minutes: 0 },
        endTime: { hours: 13, minutes: 0 },
        username: 'John'
    },
    {
        id: 5,
        description: 'Seminar',
        type: 'Event',
        date: new Date('2021-09-29'),
        startTime: { hours: 12, minutes: 0 },
        endTime: { hours: 13, minutes: 0 },
        username: 'Maria'
    },
    {
        id: 6,
        description: 'Dentist Appointment',
        type: 'Appointment',
        date: new Date('2021-09-30'),
        startTime: { hours: 12, minutes: 0 },
        endTime: { hours: 13, minutes: 0 },
        username: 'John'
    }
];
