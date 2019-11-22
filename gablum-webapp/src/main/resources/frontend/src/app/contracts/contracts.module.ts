import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractComponent } from './contract/contract.component';
import { ContractRoutingModule } from './contract-routing.module';
// import { MaterialModule } from '../material/material-module';
import { MatCardModule, MatButtonModule, MatListModule, MatExpansionModule } from '@angular/material';



@NgModule({
  declarations: [ContractComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    // MaterialModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule
  ]
})
export class ContractsModule { }
