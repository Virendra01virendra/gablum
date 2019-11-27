import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarMaterialModule } from './navbar/navbar-material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { PageTitleComponent } from './page-title/page-title.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    PageTitleComponent
  ]
})
export class AppCommonModule { }
