import { Component } from '@angular/core';
import { Schedule } from '../schedule';
import { NgIf, Time, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SCHEDULES } from '../mock-schedules';
import {
  /* . . . */
  NgFor,
  /* . . . */
} from '@angular/common';

@Component({
  selector: 'app-schedules',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf,UpperCasePipe],
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.css'
})
export class SchedulesComponent {
  schedules=SCHEDULES;
  selectedSchedule?: Schedule;
  onSelect(schedule: Schedule): void {
    this.selectedSchedule = schedule;
  }
}
