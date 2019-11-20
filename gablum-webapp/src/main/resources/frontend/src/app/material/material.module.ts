import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import { MatInputModule, MatNativeDateModule, MatToolbarModule, MatSelectModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';

const modules = [CommonModule, MatFormFieldModule, MatInputModule,
  MatNativeDateModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatSelectModule] ;

@NgModule({
  declarations: [],
  imports: [ modules],
  exports: [ modules],
  providers: [ MatDatepickerModule]
})
export class MaterialModule { }
