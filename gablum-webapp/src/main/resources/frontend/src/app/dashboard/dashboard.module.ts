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
import { SellersListDialogComponent } from './sellers-list-dialog/sellers-list-dialog.component';
import { GuestProposalListComponent } from './guest-proposal-list/guest-proposal-list.component';
import { NewAuctionCardComponent } from './new-auction-card/new-auction-card.component';
// import { AuctionCardDialogComponent } from './auction-card-dialog/auction-card-dialog.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BidCardComponent,
    AuctionsListComponent,
    ProposalsListComponent,
    NewProposalCardComponent,
    ProposalCardDialogComponent,
    SellersListDialogComponent,
    GuestProposalListComponent,
    NewAuctionCardComponent
    // AuctionCardDialogComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SchedulerModule,
    MaterialModule,
  ],
  entryComponents: [ProposalCardDialogComponent,
  SellersListDialogComponent]
})
export class DashboardModule { }
