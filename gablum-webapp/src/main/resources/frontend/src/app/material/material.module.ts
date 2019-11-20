import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatFormFieldModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';

const modules = [CommonModule,
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  MatButtonModule
  ] ;
@NgModule({
  declarations: [],
  imports: [ ...modules],
  exports: [ ...modules]
})
export class MaterialModule { }

