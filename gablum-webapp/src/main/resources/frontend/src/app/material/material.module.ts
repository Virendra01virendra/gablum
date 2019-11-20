import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatButtonModule} from '@angular/material';

const modules = [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule] ;
@NgModule({
  declarations: [],
  imports: [ ...modules],
  exports: [ ...modules]
})
export class MaterialModule { }
