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


@NgModule({
  declarations: [
    BidFormComponent,
    AuctionCardComponent,
    BidResponseDialogComponent,
    BidSubmissionDialogComponent,
    BidListComponent,
    BidCardComponent
  ],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    ConsoleModule
    // FlexLayoutModule
    // BrowserAnimationsModule,
    // NoopAnimationsModule
  ],
  exports: [
    AuctionCardComponent,
    BidCardComponent
  ],
    entryComponents: [BidResponseDialogComponent, BidSubmissionDialogComponent]
})
export class AuctionModule { }
