import { Component, OnInit, Input, Inject, OnDestroy } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebsocketService } from 'src/app/services/websocket.service';
import { LoggerService } from 'src/app/services/logger.service';
import { MatDialog, MatDialogConfig, MatSnackBar, MatBottomSheet } from '@angular/material';
import { ActivatedRoute, Params } from '@angular/router';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { Auction } from '../../interfaces/auction';
import { BidResponseDialogComponent } from '../bid-response-dialog/bid-response-dialog.component';
import { BidSubmissionDialogComponent } from '../bid-submission-dialog/bid-submission-dialog.component';
import { Score } from 'src/app/interfaces/score';
import { NewBid } from 'src/app/interfaces/newbid';
import { StompSubscription } from '@stomp/stompjs';
import { AddBidSheetComponent } from '../add-bid-sheet/add-bid-sheet.component';
import { AuctionSocketToken } from 'src/app/interfaces/auction-token';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.css']
})

export class BidFormComponent implements OnInit, OnDestroy {
  public static messageKey = 'BidFormComponent';
  result1;
  result2;
  auctionId: string;
  auction;
  scoreObject: Score;
  subscriptionRef: StompSubscription;
  public auctionUrl: string;
  isOwner = false;
  bids: NewBid[];
  tokenBody: any;
  constructor(
    public http: HttpClient,
    private ws: WebsocketService,
    private logger: LoggerService,
    private route: ActivatedRoute,
    private auctionDataService: AuctionsDataService,
    private comms: CommunicatorService,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet
    ) {
      const auctionUrl = environment.auctionUrl;
      comms.getMessages().subscribe(msg => {
        const tokenUrl = environment.tokenUrl;
        if (msg.dest === BidFormComponent.messageKey || msg.dest === '@all') {
          const data = msg.data;
          if ('auctionSingle' in data) {
              this.auction = data.auctionSingle;
              this.logger.log(this.auction);
              this.logger.log(tokenUrl);
              this.http.get<AuctionSocketToken>(tokenUrl + '/' + this.auctionId)
              .subscribe(token => {
                console.log(token);
                this.auction.socketToken = token.token;
                console.log(this.auction);
                console.log(token.token);
                this.tokenBody = JSON.parse(atob(token.token.split('.')[1]));
                this.logger.log('connecting to ws');
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

          if ('saveBids' in data) {
            this.scoreObject = data.saveBids;
            this.result1 = this.scoreObject.total;
            }

          if ('scoreBids' in data) {
            this.scoreObject = data.scoreBids;
            this.result2 = this.scoreObject.total;
            const dialogConfig = new MatDialogConfig();
            dialogConfig.data = this.result2;
            dialogConfig.width = '30%';
            this.matDialog.open(BidResponseDialogComponent, dialogConfig);
          }

          if ('bidsAuction' in data) {
            this.bids = data.bidsAuction;
            this.logger.log(this.bids);
            // this.sortBidsByCreated();
            // this.bids.forEach(b => {
            //   this.timeData.push(
            //     {
            //       name: b.createdOn,
            //       value: b.scoreObject.total
            //     }
            //   );
            // });
            // this.timeData = [...this.timeData];
            // this.sortBidsByScore();
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

    // this.ws.connect(message => this.subscribe());
    this.auctionDataService.getBidsAuction(BidFormComponent.messageKey, 'bidsAuction', this.auctionId);
    this.auctionDataService.getAuctionById(BidFormComponent.messageKey, 'auctionSingle', this.auctionId);

  }

  onSubmit(form: FormGroup) {
    const bid1 = {
    price: form.value.newPrice,
    creditPeriod: form.value.newCreditPeriod,
    qaqcCertificate: form.value.newQaqcCertificate,
    typeOfSupply: form.value.newTypeOfDelivery,
    timeOfDelivery: form.value.newTimeOfDelivery,
    };

    const bidData = {
      bid: bid1,
      auctionID: this.auctionId
    };

    this.logger.log('making api call', bid1);

    // this.http.post<Ibid>(this.url, bid, httpOptions).subscribe((response) => {
    //   console.log('response ::', response);
    // });

    // this.ws.sendBid(bid);

    // this.http.post('http://localhost:8080/api/auctions/auctions/' + this.auctionId + '/bid', bid, httpOptions)
    // .subscribe(Response => {console.log(Response); });

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = bidData;
    dialogConfig.width = '40%';
    this.matDialog.open(BidSubmissionDialogComponent, dialogConfig);

  }


  seeScore(form: FormGroup) {
    const bid = {
      price: form.value.newPrice,
      creditPeriod: form.value.newCreditPeriod,
      qaqcCertificate: form.value.newQaqcCertificate,
      typeOfSupply: form.value.newTypeOfDelivery,
      timeOfDelivery: form.value.newTimeOfDelivery,
      };
    this.auctionDataService.getScore(BidFormComponent.messageKey, bid, 'scoreBids', this.auctionId);
  }

  bidList() {
    this.ws.fetchBids();
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
        BidFormComponent.messageKey,
        'newbid', this.auction.socketToken);
      this.comms.getMessages().subscribe(message => {
          if (message.dest === '@all' || message.dest === BidFormComponent.messageKey) {
            const data = message.data;
            if ('newbid' in data) {
              this.logger.log(data.newbid.body);
              const newBid: NewBid = JSON.parse(data.newbid.body);
              if (this.bids.map(b => b.bidId).indexOf(newBid.bidId) < 0) {
                this.bids.push(newBid);
              }
            }
          }
        }
      );
    } else {
      this.subscriptionRef = this.ws.subscribe(
        '/topic/supplier/' + this.auction.auctionId + '/' + this.tokenBody.sub,
        BidFormComponent.messageKey,
        'newbid', this.auction.socketToken);
      this.comms.getMessages().subscribe(message => {
          if (message.dest === '@all' || message.dest === BidFormComponent.messageKey) {
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

  openSheet() {
    this.bottomSheet.open(
      AddBidSheetComponent
    );
  }
}
