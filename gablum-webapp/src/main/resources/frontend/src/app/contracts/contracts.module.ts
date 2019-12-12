import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractRoutingModule } from './contract-routing.module';
import { MatCardModule, MatButtonModule, MatListModule, MatExpansionModule } from '@angular/material';
import { MaterialModule } from '../material/material.module';
import { ContractCardComponent } from './contract-card/contract-card.component';
import { ContractDetailComponent } from './contract-detail/contract-detail.component';
import { ContractPageComponent } from './contract-page/contract-page.component';

@NgModule({
  declarations: [
    ContractCardComponent,
    ContractDetailComponent,
    ContractPageComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    MaterialModule,
  ]
})
export class ContractsModule { }
