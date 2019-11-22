import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import { MatInputModule, MatNativeDateModule, MatToolbarModule, MatSelectModule,
  MatSliderModule, MatCardModule, MatListModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';

const modules = [CommonModule, MatFormFieldModule, MatInputModule,
  MatNativeDateModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatSelectModule, MatRadioModule
, MatSliderModule, MatCardModule, MatStepperModule, MatDividerModule, MatListModule] ;

@NgModule({
  declarations: [],
  imports: [ modules],
  exports: [ modules],
  providers: [ MatDatepickerModule]
})
export class MaterialModule { }
