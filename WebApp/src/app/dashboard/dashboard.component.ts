import { Component,OnInit } from '@angular/core';
import { Schedule } from '../schedule';
import { ScheduleService } from '../schedule.service';
import { NgFor } from '@angular/common';
import { SchedulesComponent } from '../schedules/schedules.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [NgFor,SchedulesComponent],
  standalone: true
})

export class DashboardComponent implements OnInit{
  schedules: Schedule[] = [];
  selectedSchedule?: Schedule;
  constructor(private scheduleService: ScheduleService) { }
  ngOnInit(): void {
    this.getSchedules();
  }

  getSchedules(): void {
    this.scheduleService.getSchedules()
      .subscribe(schedules => this.schedules = schedules.slice(1, 5));
  }
  onSelect(schedule: Schedule): void {
    this.selectedSchedule = schedule;
  }
}
