import { Component } from '@angular/core';
import { Schedule } from '../schedule';
import { Time } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SCHEDULES } from '../mock-schedules';

@Component({
  selector: 'app-schedules',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.css'
})
export class SchedulesComponent {
  schedule: Schedule = {
    id: 1,
    description: 'Wedding',
    type: 'Event',
    date: new Date('2021-09-25'),
    startTime: { hours: 12, minutes: 0 },
    endTime: { hours: 13, minutes: 0 },
    username: 'Maria'
  };
}
