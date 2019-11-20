import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BidFormComponent } from './bid-form/bid-form.component';
import { AuctionRoutingModule } from './auction-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [BidFormComponent],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AuctionModule { }
