import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatButtonModule, MatOptionModule, MatSelectModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';

const modules = [
  CommonModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatOptionModule,
  MatSelectModule,
  MatExpansionModule,
  MatTooltipModule,
  MatChipsModule,
  MatRadioModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [ ...modules],
  exports: [ ...modules]
})
export class MaterialModule { }
