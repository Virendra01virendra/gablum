import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NewBid } from 'src/app/interfaces/newbid';
import { Auction } from 'src/app/interfaces/auction';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoggerService } from 'src/app/services/logger.service';
import { AuctionSocketToken } from 'src/app/interfaces/auction-token';
import { WebsocketService } from 'src/app/services/websocket.service';
import { MatSnackBar } from '@angular/material';
import { StompSubscription } from '@stomp/stompjs';
import { NgxData, NgxDateData } from 'src/app/interfaces/ngx-data';

@Component({
  selector: 'app-bid-list',
  templateUrl: './bid-list.component.html',
  styleUrls: ['./bid-list.component.css']
})
export class BidListComponent implements OnInit, OnDestroy {
  public static messageKey = 'BidListComponent';
  auctionId;
  bids: NewBid[];
  bidsData: NewBid[];
  auction: Auction;
  public isOwner = false;
  private socketToken: string;
  private tokenBody: any;

  public timeData: NgxDateData[] = [];

  private subscriptionRef: StompSubscription;
  constructor(
    private auctionDataService: AuctionsDataService,
    private comms: CommunicatorService,
    private router: Router,
    // private auth: AuthenticationService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private logger: LoggerService,
    private ws: WebsocketService,
    private snackBar: MatSnackBar
  ) {
    comms.getMessages().subscribe(msg => {
      if (msg.dest === BidListComponent.messageKey || msg.dest === '@all') {
        const data = msg.data;
        if ('bidsAuction' in data) {
          this.bids = data.bidsAuction;
          this.bids.forEach(b => {
            this.timeData.push(
              {
                name: new Date(b.createdOn),
                value: b.scoreObject.total
              }
            );
          });
          this.timeData = [...this.timeData];
        }

        if ('auctionSingle' in data) {
          this.auction = data.auctionSingle;
          const auctionUrl = environment.tokenUrl;
          this.logger.log(auctionUrl);
          this.http.get<AuctionSocketToken>(auctionUrl + '/' + this.auctionId)
          .subscribe(token => {
            this.auction.socketToken = token.token;
            this.logger.log(this.auction);
            this.tokenBody = JSON.parse(atob(token.token.split('.')[1]));
            this.logger.log(this.tokenBody);
            this.isOwner = this.tokenBody.isOwner;
            snackBar.open(
              'Connecting to the auction room',
              '',
              {
                duration: 60000
              }
            );
            if (!this.ws.stompClient.connected) {
              this.ws.connect(message => this.subscribe());
            } else {
              this.subscribe();
              this.ws.storedSubcriptions = message => this.subscribe();
            }
          },
          err => {
            this.logger.log(err);
          }
        );
      }

    }
  });
}

  ngOnInit() {
    // this.bids = [
    //   {
    //     bidId: '123',
    //     auctionId: '345',
    //     bid: {
    //       price: 12345,
    //       creditPeriod: 2,
    //       qaqcCertificate: true,
    //       timeOfDelivery: new Date(),
    //       typeOfSupply: true
    //     },
    //     createdBy: 'a@b.c',
    //     score: {
    //       creditScore: 123,
    //       deliveryScore: 23,
    //       priceScore: 56,
    //       qaqcScore: 3,
    //       typeScore: 4,
    //       total: 209
    //     }
    //   }
    // ];
    this.route.paramMap
      .subscribe((params: Params) => {
        this.auctionId = params.get('id');
        // console.log('aucuccuctioniiidd ---------->', this.auctionId);
      });

    this.auctionDataService.getBidsAuction(BidListComponent.messageKey, 'bidsAuction', this.auctionId);
    this.auctionDataService.getAuctionById(BidListComponent.messageKey, 'auctionSingle', this.auctionId);
  }


  subscribe() {
    this.logger.log('calling subscribe');
    this.snackBar.dismiss();
    this.snackBar.open(
      'Connected',
      '',
      {
        duration: 5000
      }
    );
    const stompHeaders = {
      auth: this.auction.socketToken
    };
    if (this.isOwner) {
      this.subscriptionRef = this.ws.subscribe(
        '/topic/admin/' + this.auction.auctionId,
        BidListComponent.messageKey,
        'newbid', this.auction.socketToken);
      this.comms.getMessages().subscribe(message => {
          if (message.dest === '@all' || message.dest === BidListComponent.messageKey) {
            const data = message.data;
            if ('newbid' in data) {
              this.logger.log(data.newbid.body);
              const newBid: NewBid = JSON.parse(data.newbid.body);
              if (this.bids.map(b => b.bidId).indexOf(newBid.bidId) < 0) {
                this.bids.push(newBid);
                this.timeData.push(
                  {
                    name: new Date(newBid.createdOn),
                    value: newBid.scoreObject.total
                  }
                );
                this.timeData = [...this.timeData];
                this.sortBids();
              }
            }
          }
        }
      );
    } else {
      this.subscriptionRef = this.ws.subscribe(
        '/topic/supplier/' + this.auction.auctionId + '/' + this.tokenBody.sub,
        BidListComponent.messageKey,
        'newbid', this.auction.socketToken);
      this.comms.getMessages().subscribe(message => {
          if (message.dest === '@all' || message.dest === BidListComponent.messageKey) {
            const data = message.data;
            if ('newbid' in data) {
              this.logger.log(data.newbid.body);
            }
          }
        }
      );
    }
  }

  ngOnDestroy() {
    if (this.subscriptionRef !== undefined || this.subscriptionRef !== null) {
      try {
        this.subscriptionRef.unsubscribe();
        this.ws.disconnect();
      } catch (err) {
        this.logger.log(err);
      }
    }
  }

  sortBids() {
    this.bids.sort((b1, b2) => {
      if (b1.scoreObject.total < b2.scoreObject.total) {
        return 1;
      } else if (b1.scoreObject.total > b2.scoreObject.total) {
        return -1;
      }
      return 0;
    });

    this.bids.forEach((v, i) => {
      v.rank = i + 1;
    });
  }
}
