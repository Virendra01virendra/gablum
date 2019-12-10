import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA, MatDialogRef
} from '@angular/material/dialog';
import { Proposal } from 'src/app/interfaces/proposal';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { Router } from '@angular/router';
import { CommunicatorService } from 'src/app/services/communicator.service';


@Component({
  selector: 'app-auction-start-dialog',
  templateUrl: './auction-start-dialog.component.html',
  styleUrls: ['./auction-start-dialog.component.css']
})
export class AuctionStartDialogComponent {

  public static messageKey = 'AuctionStartDialogComponent';
  disabled = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AuctionStartDialogComponent>,
    private auctionDataService: AuctionsDataService,
    private router: Router,
    private comms: CommunicatorService,
              ) {
                comms.getMessages().subscribe(msg => {
                  if (msg.dest === AuctionStartDialogComponent.messageKey || msg.dest === '@all') {
                    const data1 = msg.data;

                    if ('save-auction' in data1) {
                      this.auctionDataService.getAllAuctions('DashboardComponent', 'auctions');
                    }

                  }
                });
              }


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

    this.auctionDataService.saveAuction(AuctionStartDialogComponent.messageKey, data, 'save-auction');
    this.router.navigate(['dashboard']);
    this.close();

  }

  onClick() {
    this.disabled = true;
  }

}
