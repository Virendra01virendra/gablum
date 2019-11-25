import { BrowserModule } from '@angular/platform-browser';
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
import { LoginComponent } from './login/login.component';
import { MatOptionModule, MatSelectModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ContractsModule } from './contracts/contracts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SchedulerModule } from './scheduler/scheduler.module';
import { HttpClientModule } from '@angular/common/http';
import { FormConfirmDialogComponent } from './new-proposal/form-confirm-dialog/form-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatOptionModule,
    MatSelectModule,
    DashboardModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppCommonModule,
    HistoryModule,
    InboxModule,
    CalendarModule,
    ProfileModule,
    RegisterModule,
    NewProposalModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    ContractsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SchedulerModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FormConfirmDialogComponent]
})
export class AppModule { }
