import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA, MatDialogRef
} from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { NewBid } from 'src/app/interfaces/newbid';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-winning-bid-dialog',
  templateUrl: './winning-bid-dialog.component.html',
  styleUrls: ['./winning-bid-dialog.component.css']
})
export class WinningBidDialogComponent {

  public static messageKey = 'WinningBidDialogComponent';
  bidData = this.data.bidDataEntity;
  auctionIdn = this.data.auctionID;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<WinningBidDialogComponent>,
    private auctionDataService: AuctionsDataService,
    private router: Router,
    private comms: CommunicatorService,
    public activatedroute: ActivatedRoute
  ) {
    comms.getMessages().subscribe(msg => {
      if (msg.dest === WinningBidDialogComponent.messageKey || msg.dest === '@all') {
        const data1 = msg.data;

        // if ('save-auction' in data1) {
        //   this.auctionDataService.getAllAuctions('DashboardComponent', 'auctions');
        // }

      }
    });
  }


  close() {
  this.dialogRef.close();
  }
  selectBid() {
    this.auctionDataService.saveWinningBid(WinningBidDialogComponent.messageKey, this.bidData, 'winningBid', this.auctionIdn);
    this.router.navigate([environment.contractsUrl]);
    this.close();
  }






}
