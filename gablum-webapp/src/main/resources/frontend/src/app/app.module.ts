// import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppCommonModule } from './common/common.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HistoryModule } from './history/history.module';
import { InboxModule } from './inbox/inbox.module';
import { CalendarModule } from './calendar/calendar.module';
import { ProfileModule } from './profile/profile.module';
import { RegisterModule } from './register/register.module';
import { NewProposalModule } from './new-proposal/new-proposal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatOptionModule, MatSelectModule, MatButton, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ContractsModule } from './contracts/contracts.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuctionModule } from './auction/auction.module';
import { MaterialModule } from './material/material.module';
import { FormConfirmDialogComponent } from './new-proposal/form-confirm-dialog/form-confirm-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { InterceptorService } from './services/interceptor.service';
import { EditProfileDialogComponent } from './profile/edit-profile-dialog/edit-profile-dialog.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    EditProfileDialogComponent,
    ProfilePageComponent
  ],
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppCommonModule,
    HistoryModule,
    InboxModule,
    CalendarModule,
    ProfileModule,
    RegisterModule,
    NewProposalModule,
    HttpClientModule,
    AuctionModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    ContractsModule,
    SchedulerModule,
    RouterModule,
    MatOptionModule,
    MatSelectModule,
    AppRoutingModule,
    AppCommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
