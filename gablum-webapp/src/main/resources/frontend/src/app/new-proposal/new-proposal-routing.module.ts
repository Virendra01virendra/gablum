import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProposalPageComponent } from './new-proposal-page/new-proposal-page.component';
import { NewProposalForm1Component } from './new-proposal-form/new-proposal-form1.component';
import { NewProposalCardComponent } from './new-proposal-card/new-proposal-card.component';


const routes: Routes = [
  {
    path: '',
    component: NewProposalPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: NewProposalForm1Component,
    pathMatch: 'full'
  },
  {
    path: 'card',
    component: NewProposalCardComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProposalRoutingModule { }
