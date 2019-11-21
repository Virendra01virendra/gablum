import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DetailComponent } from './detail/detail.component';
import { AuctionsListComponent } from './auctions-list/auctions-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DetailComponent,
    AuctionsListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
