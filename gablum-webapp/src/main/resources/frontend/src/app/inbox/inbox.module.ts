import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxPageComponent } from './inbox-page/inbox-page.component';


@NgModule({
  declarations: [InboxPageComponent],
  imports: [
    CommonModule,
    InboxRoutingModule
  ]
})
export class InboxModule { }
