import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarMaterialModule } from './navbar-material.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    NavbarMaterialModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
