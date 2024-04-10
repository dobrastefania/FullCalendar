import { Routes } from '@angular/router';
import { SchedulesComponent } from './schedules/schedules.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [{ path: 'schedules', component: SchedulesComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'detail/:description', component: SchedulesComponent }
];
