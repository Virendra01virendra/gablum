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

  constructor(
    private auctionDataService: AuctionsDataService,
    private comms: CommunicatorService,
    private router: Router,
    private logger: LoggerService,
    private http: HttpClient,
    private ws: WebsocketService
    ) {

    }
  public static messageKey = 'auction-card-component';

  @Input() public auction: Auction;
  @Input() public buttonShow: boolean;

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
    this.router.navigate(['auctions/' + this.auction.auctionId + '/new/bid']);
  }

  public seeBids() {
    this.router.navigate(['auctions/' + this.auction.auctionId + '/see/bids']);
  }

  subscribe() {
    // if (this.isOwner) {
    //   this.ws.subscribe(
    //     '/topic/admin/' + this.auction.auctionId,
    //     AuctionCardComponent.messageKey,
    //     'newbid', this.auction.socketToken).subscribe(message => {
    //       if (message.dest === '@all' || message.dest === AuctionCardComponent.messageKey) {
    //         const data = message.data;
    //         if ('newbid' in data) {
    //           this.logger.log(data.newbid.body);
    //         }
    //       }
    //     }
    //   );
    // } else {
    //   this.ws.subscribe(
    //     '/topic/supplier/' + this.auction.auctionId + '/' + this.tokenBody.sub,
    //     AuctionCardComponent.messageKey,
    //     'newbid', this.auction.socketToken).subscribe(message => {
    //       if (message.dest === '@all' || message.dest === AuctionCardComponent.messageKey) {
    //         const data = message.data;
    //         if ('newbid' in data) {
    //           this.logger.log(data.newbid.body);
    //         }
    //       }
    //     }
    //   );
    // }
  }

}
