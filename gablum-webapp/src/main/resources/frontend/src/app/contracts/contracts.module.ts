import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractComponent } from './contract/contract.component';
import { ContractRoutingModule } from './contract-routing.module';
// import { MaterialModule } from '../material/material-module';
import { MatCardModule, MatButtonModule, MatListModule } from '@angular/material';



@NgModule({
  declarations: [ContractComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    // MaterialModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ]
})
export class ContractsModule { }
