import { Injectable } from '@angular/core';
import { Schedule } from './schedule';
import { SCHEDULES } from './mock-schedules';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class ScheduleService {

  constructor(private messageService: MessageService) { }
  getSchedules(): Observable<Schedule[]>{
    const schedules=of(SCHEDULES);
    this.messageService.add('ScheduleService: fetched schedules');
    return schedules;
  }
}
