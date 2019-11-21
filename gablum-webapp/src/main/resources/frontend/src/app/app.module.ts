import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarModule } from './common/navbar/navbar.module';
import { HistoryModule } from './history/history.module';
import { InboxModule } from './inbox/inbox.module';
import { CalendarModule } from './calendar/calendar.module';
import { ProfileModule } from './profile/profile.module';
import { RegisterModule } from './register/register.module';
import { NewProposalModule } from './new-proposal/new-proposal.module';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { ConsoleModule } from './console/console.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AuctionModule } from './auction/auction.module';
import { MaterialModule } from './material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    DashboardModule,
    HistoryModule,
    InboxModule,
    CalendarModule,
    ProfileModule,
    RegisterModule,
    NewProposalModule,
    CommonModule,
    PortalModule,
    ConsoleModule,
    MatTableModule,
    HttpClientModule,
    AuctionModule,
    MaterialModule,
    MDBBootstrapModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
