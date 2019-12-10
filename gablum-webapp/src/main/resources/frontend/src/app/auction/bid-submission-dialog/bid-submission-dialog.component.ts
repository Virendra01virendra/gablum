import { Component, Inject, OnInit, ɵɵpipeBind2 } from '@angular/core';

import {
  MAT_DIALOG_DATA, MatDialogRef
} from '@angular/material/dialog';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { Router } from '@angular/router';
import { Score } from 'src/app/interfaces/score';

@Component({
  selector: 'app-bid-submission-dialog',
  templateUrl: './bid-submission-dialog.component.html',
  styleUrls: ['./bid-submission-dialog.component.css']
})
export class BidSubmissionDialogComponent implements OnInit {
  public static messageKey = 'BidSubmissionDialogComponent';
  result1;
  scoreObject: Score;
  bid2 = {
    price: this.data.bid.price,
    creditPeriod: this.data.bid.creditPeriod,
    qaqcCertificate: this.data.bid.qaqcCertificate,
    typeOfSupply: this.data.bid.typeOfSupply,
    timeOfDelivery: this.data.bid.timeOfDelivery,
    };

  auctionIdn = this.data.auctionID;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<BidSubmissionDialogComponent>,
              private router: Router,
              private auctionDataService: AuctionsDataService,
              private comms: CommunicatorService,
              ) {
                comms.getMessages().subscribe(msg => {
                  if (msg.dest === BidSubmissionDialogComponent.messageKey || msg.dest === '@all') {
                    if ('scoreBids' in data) {
                        this.scoreObject = data.scoreBids;
                        this.result1 = this.scoreObject.total;
                        console.log('score thru dialog---------->', this.result1);
                    }
                  }
                });
              }


  ngOnInit() {
    console.log(' Dialog data ::', this.data);
    this.auctionDataService.getScore(BidSubmissionDialogComponent.messageKey, this.bid2, 'scoreBids', this.auctionIdn);
    console.log('aaaaaaaaaaaafffffftttttttterrrr api');
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.auctionDataService.saveBid(BidSubmissionDialogComponent.messageKey, this.bid2, 'saveBids', this.auctionIdn);
    this.router.navigate(['dashboard']);
    this.close();
  }


}
