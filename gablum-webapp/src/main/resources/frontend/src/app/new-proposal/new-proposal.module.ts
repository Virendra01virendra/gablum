import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProposalRoutingModule } from './new-proposal-routing.module';

import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NewProposalPageComponent} from './new-proposal-page/new-proposal-page.component';
import { NewProposalForm1Component } from './new-proposal-form/new-proposal-form1.component';
import { NewProposalCardComponent } from './new-proposal-card/new-proposal-card.component';
import { MatCardModule } from '@angular/material';


@NgModule({
  declarations: [NewProposalPageComponent, NewProposalForm1Component, NewProposalCardComponent],
  imports: [
    CommonModule,
    NewProposalRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    MatCardModule
  ]
})
export class NewProposalModule { }
