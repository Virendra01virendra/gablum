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
import { AuctionModule } from '../auction/auction.module';
import { SellersListDialogComponent } from './sellers-list-dialog/sellers-list-dialog.component';
import { GuestProposalListComponent } from './guest-proposal-list/guest-proposal-list.component';
import { ExtendProposalDialogComponent } from './extend-proposal-dialog/extend-proposal-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SellerProposalCardComponent } from './seller-proposal-card/seller-proposal-card.component';
import { MatDatepickerModule } from '@angular/material';
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
    ExtendProposalDialogComponent,
    SellerProposalCardComponent
    // AuctionCardDialogComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SchedulerModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ConsoleModule,
    AuctionModule,
    MatDatepickerModule
  ],
  entryComponents: [ProposalCardDialogComponent,
  SellersListDialogComponent, ExtendProposalDialogComponent]
})
export class DashboardModule { }
