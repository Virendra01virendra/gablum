import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProposalRoutingModule } from './new-proposal-routing.module';
import { NewProposalPageComponent } from './new-proposal-page/new-proposal-page.component';


@NgModule({
  declarations: [NewProposalPageComponent],
  imports: [
    CommonModule,
    NewProposalRoutingModule
  ]
})
export class NewProposalModule { }
