import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseProposalsRoutingModule } from './browse-proposals-routing.module';
import { BrowseProposalsSellerComponent } from './browse-proposals-seller/browse-proposals-seller.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [BrowseProposalsSellerComponent],
  imports: [
    CommonModule,
    BrowseProposalsRoutingModule,
    MaterialModule
  ]
})
export class BrowseProposalsModule { }
