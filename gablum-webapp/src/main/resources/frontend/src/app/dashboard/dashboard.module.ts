import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BidCardComponent } from './bid-card/bid-card.component';
import { AuctionsListComponent } from './auctions-list/auctions-list.component';
import { MaterialModule } from '../material/material.module';
import { ProposalsListComponent } from './proposals-list/proposals-list.component';
import { NewProposalCardComponent } from './new-proposal-card/new-proposal-card.component';
import { ProposalCardDialogComponent } from './proposal-card-dialog/proposal-card-dialog.component';
import { SchedulerModule } from '../scheduler/scheduler.module';
import { ConsoleModule } from '../console/console.module';
import { AuctionCardComponent } from '../auction/auction-card/auction-card.component';
import { AuctionModule } from '../auction/auction.module';

@NgModule({
  declarations: [
    DashboardComponent,
    BidCardComponent,
    AuctionsListComponent,
    ProposalsListComponent,
    NewProposalCardComponent,
    ProposalCardDialogComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SchedulerModule,
    MaterialModule,
    ConsoleModule,
    AuctionModule
  ],
  entryComponents: [ProposalCardDialogComponent]
})
export class DashboardModule { }
