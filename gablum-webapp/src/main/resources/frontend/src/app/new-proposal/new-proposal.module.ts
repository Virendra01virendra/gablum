import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProposalRoutingModule } from './new-proposal-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NewProposalPageComponent} from './new-proposal-page/new-proposal-page.component';
import { NewProposalForm2Component } from './new-proposal-form2/new-proposal-form2.component';
import { NewProposalForm1Component } from './new-proposal-form1/new-proposal-form1.component';
import { NewProposalForm3Component } from './new-proposal-form3/new-proposal-form3.component';


@NgModule({
  declarations: [NewProposalPageComponent, NewProposalForm2Component, NewProposalForm1Component, NewProposalForm3Component],
  imports: [
    CommonModule,
    NewProposalRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class NewProposalModule { }
