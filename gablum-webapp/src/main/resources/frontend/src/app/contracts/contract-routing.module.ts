import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractComponent } from './contract/contract.component';


const routes: Routes = [
  {
    path: '',
    component: ContractComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
