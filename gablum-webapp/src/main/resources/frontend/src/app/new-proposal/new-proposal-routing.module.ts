import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProposalPageComponent } from './new-proposal-page/new-proposal-page.component';
import { NewProposalForm1Component } from './new-proposal-form1/new-proposal-form1.component';
import { NewProposalForm2Component } from './new-proposal-form2/new-proposal-form2.component';
import { NewProposalForm3Component } from './new-proposal-form3/new-proposal-form3.component';


const routes: Routes = [
  {
    path: '',
    component: NewProposalPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'form1',
    component: NewProposalForm1Component,
    pathMatch: 'full'
  },
  {
    path: 'form2',
    component: NewProposalForm2Component,
    pathMatch: 'full'
  },
  {
    path: 'form3',
    component: NewProposalForm3Component,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProposalRoutingModule { }
