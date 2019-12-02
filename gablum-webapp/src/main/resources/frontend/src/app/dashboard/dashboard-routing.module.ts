import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewProposalCardComponent } from './new-proposal-card/new-proposal-card.component';

const routes: Routes = [
  {path: '',
   component: DashboardComponent,
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
export class DashboardRoutingModule { }
