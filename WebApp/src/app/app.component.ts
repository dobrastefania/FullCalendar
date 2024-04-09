import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SchedulesComponent } from './schedules/schedules.component';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SchedulesComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Agenda';
}
