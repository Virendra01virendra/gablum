import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { SchedulerRoutingModule } from './scheduler-routing.module';
import {MaterialModule} from './../material/material.module';
import { DashboardModule } from '../dashboard/dashboard.module';



@NgModule({
  declarations: [TimerComponent],
  imports: [
    CommonModule,
    SchedulerRoutingModule,
    MaterialModule
  ],
<<<<<<< HEAD
  exports: [
    TimerComponent]
=======
  exports: [ TimerComponent ]
>>>>>>> 65737b05801d77d57b2056e495ce2d7ea7061723
})
export class SchedulerModule { }
