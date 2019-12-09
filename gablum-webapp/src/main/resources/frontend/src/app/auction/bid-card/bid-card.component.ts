import { Component, OnInit, Input } from '@angular/core';
import { NewBid } from 'src/app/interfaces/newbid';
import { MatChipsModule } from '@angular/material/chips';
import { NgxData } from 'src/app/interfaces/ngx-data';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-bid-card',
  templateUrl: './bid-card.component.html',
  styleUrls: ['./bid-card.component.css']
})
export class BidCardComponent implements OnInit {

  constructor(
    private auctionDataService: AuctionsDataService,
    private route: ActivatedRoute,
    ) {

  }
  public static messageKey = 'BidCardComponent';
  auctionId: string;

  @Input() public bidDataEntity: NewBid;

  public data: NgxData[];


  ngOnInit() {
    this.data = Object.keys(this.bidDataEntity.score).map(key => {
      // if (key !== 'total') {
        return {name: key, value: this.bidDataEntity.score[key]};
      // }
    }).filter(item => item.name !== 'total');
    this.route.paramMap
      .subscribe((params: Params) => {
        this.auctionId = params.get('id');
        // console.log('aucuccuctioniiidd ---------->', this.auctionId);
      });
  }

  selectBid(bidDataEntity) {
    this.auctionDataService.saveWinningBid(BidCardComponent.messageKey, bidDataEntity, 'winningBid', this.auctionId);
  }

}
