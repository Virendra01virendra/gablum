import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProposalRoutingModule } from './new-proposal-routing.module';
import { NewProposalPageComponent } from './new-proposal-page/new-proposal-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [NewProposalPageComponent],
  imports: [
    CommonModule,
    NewProposalRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class NewProposalModule { }
