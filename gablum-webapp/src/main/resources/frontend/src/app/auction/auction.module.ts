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


@NgModule({
  declarations: [BidFormComponent, AuctionCardComponent, BidResponseDialogComponent],
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
    AuctionCardComponent],
    entryComponents:[BidResponseDialogComponent]
})
export class AuctionModule { }
