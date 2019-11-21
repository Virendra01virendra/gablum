import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { SchedulerRoutingModule } from './scheduler-routing.module';



@NgModule({
  declarations: [TimerComponent],
  imports: [
    CommonModule,
    SchedulerRoutingModule
  ]
})
export class SchedulerModule { }
