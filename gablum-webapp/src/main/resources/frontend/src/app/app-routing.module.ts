import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
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
    path: 'auction',
    loadChildren: () => import('./auction/auction.module').then(m => m.AuctionModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./app.module').then(m => m.AppModule)

  },
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
