import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarMaterialModule } from './navbar/navbar-material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class AppCommonModule { }
