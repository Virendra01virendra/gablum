import { Component, OnInit } from '@angular/core';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NewBid } from 'src/app/interfaces/newbid';
import { Auction } from 'src/app/interfaces/auction';

@Component({
  selector: 'app-bid-list',
  templateUrl: './bid-list.component.html',
  styleUrls: ['./bid-list.component.css']
})
export class BidListComponent implements OnInit {
  public static messageKey = 'BidListComponent';
  auctionId;
  bids: NewBid[];
  auction: Auction;

  constructor(
    private auctionDataService: AuctionsDataService,
    private comms: CommunicatorService,
    private router: Router,
    // private auth: AuthenticationService,
    private route: ActivatedRoute
  ) {
    comms.getMessages().subscribe(msg => {
      if (msg.dest === BidListComponent.messageKey || msg.dest === '@all') {
        const data = msg.data;
        // console.log('bidddddddd-------------->', data);
        if ('bidsAuction' in data) {
          this.bids = data.bidsAuction;
        }

        if ('auctionSingle' in data) {
          this.auction = data.auctionSingle;
      }

    }
  });
}

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: Params) => {
        this.auctionId = params.get('id');
        // console.log('aucuccuctioniiidd ---------->', this.auctionId);
      });

    this.auctionDataService.getBidsAuction(BidListComponent.messageKey, 'bidsAuction', this.auctionId);
    this.auctionDataService.getAuctionById(BidListComponent.messageKey, 'auctionSingle', this.auctionId);
  }


}
