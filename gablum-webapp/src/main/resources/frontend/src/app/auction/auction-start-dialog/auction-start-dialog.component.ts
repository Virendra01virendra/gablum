import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA, MatDialogRef
} from '@angular/material/dialog';
import { Proposal } from 'src/app/interfaces/proposal';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auction-start-dialog',
  templateUrl: './auction-start-dialog.component.html',
  styleUrls: ['./auction-start-dialog.component.css']
})
export class AuctionStartDialogComponent {

  public static messageKey = 'AuctionStartDialogComponent';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<AuctionStartDialogComponent>,
              private auctionDataService: AuctionsDataService,
              private router: Router
              ) { }

  close() {
    this.dialogRef.close();
  }

  startAuction(proposal1: Proposal) {
    const auction = {
      auctionName: proposal1.productName,
      proposal: proposal1,
      isAuctionActive: true,
      interestedUsersEmail: proposal1.interestedUsersEmail
    };
    const auctionList = [];
    auctionList.push(auction);

    const data = JSON.parse(JSON.stringify(auctionList));

    this.auctionDataService.saveAuction('DashboardComponent', data, 'save-auction');
    // this.auctionDataService.getAllAuctions('DashboardComponent', 'auctions');
    this.router.navigate(['dashboard']);
    this.close();

  }

}
