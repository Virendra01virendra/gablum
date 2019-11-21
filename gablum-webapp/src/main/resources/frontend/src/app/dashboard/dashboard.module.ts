import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DetailComponent } from './detail/detail.component';
import { AuctionsListComponent } from './auctions-list/auctions-list.component';
import { BidCardComponent } from './bid-card/bid-card.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DetailComponent,
    AuctionsListComponent,
    BidCardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
