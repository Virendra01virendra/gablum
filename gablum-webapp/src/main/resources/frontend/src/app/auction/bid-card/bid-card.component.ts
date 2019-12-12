import { Component, OnInit, Input } from '@angular/core';
import { NewBid } from 'src/app/interfaces/newbid';
import { MatChipsModule } from '@angular/material/chips';
import { NgxData } from 'src/app/interfaces/ngx-data';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { WinningBidDialogComponent } from '../winning-bid-dialog/winning-bid-dialog.component';



@Component({
  selector: 'app-bid-card',
  templateUrl: './bid-card.component.html',
  styleUrls: ['./bid-card.component.css']
})
export class BidCardComponent implements OnInit {

  constructor(
    private auctionDataService: AuctionsDataService,
    private route: ActivatedRoute,
    private matDialog: MatDialog
    ) {

  }
  public static messageKey = 'BidCardComponent';
  public auctionId: string;
  public bidRank: number;

  @Input() public bidDataEntity: NewBid;

  public data: NgxData[];


  ngOnInit() {
    this.data = Object.keys(this.bidDataEntity.scoreObject).map(key => {
        return {name: key, value: this.bidDataEntity.scoreObject[key]};
    }).filter(item => item.name !== 'total');
    this.route.paramMap
      .subscribe((params: Params) => {
        this.auctionId = params.get('id');
        // console.log('aucuccuctioniiidd ---------->', this.auctionId);
      });
  }

  openDialog(bidDataEntity1) {
    // this.auctionDataService.saveWinningBid(BidCardComponent.messageKey, bidDataEntity, 'winningBid', this.auctionId);
    const bidData = {
      bidDataEntity: bidDataEntity1,
      auctionID: this.auctionId
    };

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = bidData;
    dialogConfig.width = '40%';
    this.matDialog.open(WinningBidDialogComponent, dialogConfig);

  }

}
