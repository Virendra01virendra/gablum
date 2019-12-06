import { Component, Inject, OnInit } from '@angular/core';

import {
  MAT_DIALOG_DATA, MatDialogRef
} from '@angular/material/dialog';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bid-submission-dialog',
  templateUrl: './bid-submission-dialog.component.html',
  styleUrls: ['./bid-submission-dialog.component.css']
})
export class BidSubmissionDialogComponent implements OnInit {
  public static messageKey = 'BidSubmissionDialogComponent';
  result1;
  scoreObject: {
    score: number;
  };
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
                        this.result1 = this.scoreObject.score;
                    }
                  }
                });
              }


  ngOnInit() {
    console.log(' Dialog data ::', this.data);
    this.auctionDataService.getScore(BidSubmissionDialogComponent.messageKey, this.data.bid, 'scoreBids', this.data.auctionID);
    console.log('aaaaaaaaaaaafffffftttttttterrrr api');
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.auctionDataService.saveBid(BidSubmissionDialogComponent.messageKey, this.data.bid, 'saveBids', this.data.auctionID);
    this.router.navigate(['dashboard']);
  }


}
