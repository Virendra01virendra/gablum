import { Component, OnInit, Input } from '@angular/core';
import { Auction } from 'src/app/interfaces/auction';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { AuctionsListComponent } from 'src/app/dashboard/auctions-list/auctions-list.component';
import { Router } from '@angular/router';
import { Proposal } from 'src/app/interfaces/proposal';
import { environment } from 'src/environments/environment';
import { LoggerService } from 'src/app/services/logger.service';
import { HttpClient } from '@angular/common/http';
import { AuctionSocketToken } from 'src/app/interfaces/auction-token';
import { WebsocketService } from 'src/app/services/websocket.service';
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
    private logger: LoggerService,
    private http: HttpClient,
    private ws: WebsocketService
    ) {

    //     if ('auctions' in data) {
    //       this.auctions = data.auctions;
    //       console.log(this.auctions);
    //     }
    //   }
    // });
  }

  @Input() public auction: Auction;
  @Input() public buttonShow: boolean;
  @Input() public showAnyButton: boolean;


  public isOwner = false;
  private tokenBody: any;

  ngOnInit() {
    const auctionUrl = environment.tokenUrl;
    this.http.get<AuctionSocketToken>(auctionUrl + '/' + this.auction.auctionId)
    .subscribe(token => {
      this.auction.socketToken = token.token;
      this.logger.log(this.auction);
      this.tokenBody = JSON.parse(atob(token.token.split('.')[1]));
      this.logger.log(this.tokenBody);
      this.isOwner = this.tokenBody.isOwner;
      // this.ws.connect(message => this.subscribe());
    },
    err => {
      this.logger.log(err);
    });
    this.logger.log(auctionUrl);
  }

  public placeBid() {
    this.logger.log('calling place bid');
    this.router.navigate(['auctions', this.auction.auctionId, 'new', 'bid']);
  }

  public seeBids() {
    this.router.navigate(['auctions/' + this.auction.auctionId + '/see/bids']);
  }
}
