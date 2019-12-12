import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractCardComponent } from './contract-card/contract-card.component';
import { ContractDetailComponent } from './contract-detail/contract-detail.component';


const routes: Routes = [
  {
    path: ':id',
    component: ContractDetailComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContractCardComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
