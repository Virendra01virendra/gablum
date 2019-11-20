import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatFormFieldModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';

const modules = [CommonModule,
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  ] ;
@NgModule({
  declarations: [],
  imports: [ ...modules],
  exports: [ ...modules]
})
export class MaterialModule { }

