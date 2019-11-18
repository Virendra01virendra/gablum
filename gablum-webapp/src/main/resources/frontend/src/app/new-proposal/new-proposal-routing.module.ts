import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProposalPageComponent } from './new-proposal-page/new-proposal-page.component';


const routes: Routes = [
  {
    path: '',
    component: NewProposalPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProposalRoutingModule { }
