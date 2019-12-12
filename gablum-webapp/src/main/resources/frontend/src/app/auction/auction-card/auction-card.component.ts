import { Component, OnInit, Input } from '@angular/core';
import { Auction } from 'src/app/interfaces/auction';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { AuctionsListComponent } from 'src/app/dashboard/auctions-list/auctions-list.component';
import { Router } from '@angular/router';
import { Proposal } from 'src/app/interfaces/proposal';
import { environment } from 'src/environments/environment';
import { LoggerService } from 'src/app/services/logger.service'
@Component({
  selector: 'app-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.css']
})
export class AuctionCardComponent implements OnInit {
  public static messageKey = 'auction-card-component';
  public qualityMsgTrue = 'Quality Assurance Required';
  public qualityMsgFalse = 'Quality Certification Optional';
  public supplyTrue = 'FULL';
  public supplyFalse = 'IN PARTS';
  constructor(
    private auctionDataService: AuctionsDataService,
    private comms: CommunicatorService,
    private router: Router,
    private logger: LoggerService
    ) {
      // comms.getMessages().subscribe(msg => {
      //   if (msg.dest === AuctionCardComponent.messageKey || msg.dest === '@all') {
      //     const data = msg.data;

    //     if ('auctions' in data) {
    //       this.auctions = data.auctions;
    //       console.log(this.auctions);
    //     }
    //   }
    // });
  }

  @Input() public auction: Auction;
  @Input() public buttonShow: boolean;

  ngOnInit() {
    console.log('auction details ::::', this.auction);
    const auctionUrl = environment.auctionUrl;
    this.logger.log(auctionUrl);
  }

  public placeBid() {
    this.router.navigate(['auctions/' + this.auction.auctionId + '/new/bid']);
  }

  public seeBids() {
    this.router.navigate(['auctions/' + this.auction.auctionId + '/see/bids']);
  }

}
