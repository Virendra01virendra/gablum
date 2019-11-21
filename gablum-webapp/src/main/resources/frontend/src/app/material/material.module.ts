import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatButtonModule, MatOptionModule, MatSelectModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';


const modules = [
  CommonModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatOptionModule,
  MatSelectModule,
  MatToolbarModule,
  MatExpansionModule,
  MatTooltipModule,
  MatChipsModule
];
@NgModule({
  declarations: [],
  imports: [ ...modules],
  exports: [ ...modules]
})
export class MaterialModule { }
