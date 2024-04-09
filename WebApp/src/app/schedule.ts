import { Time } from "@angular/common";

export interface Schedule {
    id: number;
    description: string;
    type: string;
    date: Date;
    startTime: Time;
    endTime: Time;
    username: string;
}