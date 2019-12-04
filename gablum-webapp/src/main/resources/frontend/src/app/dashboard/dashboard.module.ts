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
import { ExtendRegistrationComponent } from './extend-registration/extend-registration.component';
import { SellersListDialogComponent } from './sellers-list-dialog/sellers-list-dialog.component';
import { GuestProposalListComponent } from './guest-proposal-list/guest-proposal-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BidCardComponent,
    AuctionsListComponent,
    ProposalsListComponent,
    NewProposalCardComponent,
    ProposalCardDialogComponent,
    ExtendRegistrationComponent,
    SellersListDialogComponent,
    GuestProposalListComponent
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
