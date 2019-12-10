import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractComponent } from './contract/contract.component';
import { ContractRoutingModule } from './contract-routing.module';
import { MatCardModule, MatButtonModule, MatListModule, MatExpansionModule } from '@angular/material';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ContractComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    MaterialModule,
  ]
})
export class ContractsModule { }
