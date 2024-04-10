import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { SchedulesComponent } from './schedules/schedules.component';
import { UsersComponent } from './users/users.component';
import { MessagesComponent } from './messages/messages.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SchedulesComponent, UsersComponent,MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Agenda';
}
