import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BidFormComponent } from './bid-form/bid-form.component';
import { AuctionRoutingModule } from './auction-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AuctionCardComponent } from './auction-card/auction-card.component';
// import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
// import {FlexL  ayoutModule} from '@angular/flex-layout';
import { ConsoleModule } from '../console/console.module';
import { BidResponseDialogComponent } from './bid-response-dialog/bid-response-dialog.component';
import { BidSubmissionDialogComponent } from './bid-submission-dialog/bid-submission-dialog.component';
import { TimerComponent } from '../scheduler/timer/timer.component';
import { BidListComponent } from './bid-list/bid-list.component';
import { BidCardComponent } from './bid-card/bid-card.component';
import { AuctionStartDialogComponent } from './auction-start-dialog/auction-start-dialog.component';
import { SchedulerModule } from '../scheduler/scheduler.module';
import { WinningBidDialogComponent } from './winning-bid-dialog/winning-bid-dialog.component';
import { AddBidSheetComponent } from './add-bid-sheet/add-bid-sheet.component';


@NgModule({
  declarations: [
    BidFormComponent,
    AuctionCardComponent,
    BidResponseDialogComponent,
    BidSubmissionDialogComponent,
    BidListComponent,
    BidCardComponent,
    AuctionStartDialogComponent,
    WinningBidDialogComponent,
    AddBidSheetComponent
  ],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    ConsoleModule,
    SchedulerModule
    // FlexLayoutModule
    // BrowserAnimationsModule,
    // NoopAnimationsModule
  ],
  exports: [
    AuctionCardComponent,
    BidCardComponent
  ],
    entryComponents: [
      BidResponseDialogComponent,
      BidSubmissionDialogComponent,
      WinningBidDialogComponent,
      AddBidSheetComponent
    ]
})
export class AuctionModule { }
