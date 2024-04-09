import { Component,OnInit } from '@angular/core';
import { Schedule } from '../schedule';
import { NgIf, Time, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScheduleService } from '../schedule.service';
import { MessageService } from '../message.service';
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

  constructor(private scheduleService: ScheduleService, private messageService:MessageService) { }
  schedules:Schedule[]=[];
  selectedSchedule?: Schedule;

  onSelect(schedule: Schedule): void {
    this.selectedSchedule = schedule;
    this.messageService.add(`SchedulesComponent: Selected schedule id=${schedule.id}`);
  }

  getSchedules(): void {
    this.scheduleService.getSchedules().subscribe(schedules => this.schedules = schedules);
  }

  ngOnInit() {
    this.getSchedules();
  }


}
