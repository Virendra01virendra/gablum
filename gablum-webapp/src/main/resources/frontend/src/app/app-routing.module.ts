import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TimerComponent } from './scheduler/timer/timer.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
  },
  {
    path: 'console',
    loadChildren: () => import('./console/console.module').then(module => module.ConsoleModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then(module => module.HistoryModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module').then(module => module.InboxModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./new-proposal/new-proposal.module').then(m => m.NewProposalModule)
  },
  {
    path: 'new/bid',
    loadChildren: () => import('./auction/auction.module').then(m => m.AuctionModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./app.module').then(m => m.AppModule)
  },
  {
    path: 'contracts',
    loadChildren: () => import('./contracts/contracts.module').then(m => m.ContractsModule)
  },
  {
    path: 'timer',
    loadChildren: () => import( './scheduler/scheduler.module').then(m => m.SchedulerModule)
  },
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
