import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BidFormComponent } from './bid-form/bid-form.component';
import { AuctionRoutingModule } from './auction-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AuctionCardComponent } from './auction-card/auction-card.component';
import { ConsoleModule } from '../console/console.module';
import { BidResponseDialogComponent } from './bid-response-dialog/bid-response-dialog.component';
import { BidSubmissionDialogComponent } from './bid-submission-dialog/bid-submission-dialog.component';
import { BidListComponent } from './bid-list/bid-list.component';
import { BidCardComponent } from './bid-card/bid-card.component';
import { AuctionStartDialogComponent } from './auction-start-dialog/auction-start-dialog.component';
import { SchedulerModule } from '../scheduler/scheduler.module';
import { WinningBidDialogComponent } from './winning-bid-dialog/winning-bid-dialog.component';
<<<<<<< HEAD
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
=======
import { MatChipsModule } from '@angular/material';
>>>>>>> 1500c9fbadb07cf932bed34ac2cd97159b0c3fc2

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    BidFormComponent,
    AuctionCardComponent,
    BidResponseDialogComponent,
    BidSubmissionDialogComponent,
    BidListComponent,
    BidCardComponent,
    AuctionStartDialogComponent,
    WinningBidDialogComponent
  ],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    ConsoleModule,
    SchedulerModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    // FlexLayoutModule
    // BrowserAnimationsModule,
    // NoopAnimationsModule
      }
    })],
  exports: [
    AuctionCardComponent,
    BidCardComponent
  ],
    entryComponents: [BidResponseDialogComponent, BidSubmissionDialogComponent, WinningBidDialogComponent]
})
export class AuctionModule { }
