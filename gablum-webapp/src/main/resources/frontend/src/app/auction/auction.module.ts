import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BidFormComponent } from './bid-form/bid-form.component';
import { AuctionRoutingModule } from './auction-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AuctionCardComponent } from './auction-card/auction-card.component';
import { BidDialogComponent } from './bid-form/bid-dialog/bid-dialog.component';
// import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
// import {FlexL  ayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [BidFormComponent, AuctionCardComponent, BidDialogComponent],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    // FlexLayoutModule
    // BrowserAnimationsModule,
    // NoopAnimationsModule
  ]
})
export class AuctionModule { }
