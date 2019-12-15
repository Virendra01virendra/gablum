import { Component, OnInit, Input, Inject, OnDestroy } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebsocketService } from 'src/app/services/websocket.service';
import { LoggerService } from 'src/app/services/logger.service';
import { MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Params } from '@angular/router';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { Auction } from '../../interfaces/auction';
import { BidResponseDialogComponent } from '../bid-response-dialog/bid-response-dialog.component';
import { BidSubmissionDialogComponent } from '../bid-submission-dialog/bid-submission-dialog.component';
import { Score } from 'src/app/interfaces/score';
import { NewBid } from 'src/app/interfaces/newbid';
import { StompSubscription } from '@stomp/stompjs';

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
  bidForm: FormGroup;
  url = 'localhost:8080/api/auctions/auctions/bid';
  result1;
  result2;
  auctionId: string;
  auctionSingle: Auction;
  scoreObject: Score;
  subscriptionRef: StompSubscription;
  isOwner = false;
  bids: NewBid[];
  tokenBody: string;
  constructor(
    public http: HttpClient,
    private ws: WebsocketService,
    private logger: LoggerService,
    private route: ActivatedRoute,
    private auctionDataService: AuctionsDataService,
    private comms: CommunicatorService,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar
    ) {
      comms.getMessages().subscribe(msg => {
        if (msg.dest === BidFormComponent.messageKey || msg.dest === '@all') {
          const data = msg.data;
          if ('auctionSingle' in data) {
              this.auctionSingle = data.auctionSingle;
              this.logger.log(this.auctionSingle);
          }

          if ('saveBids' in data) {
            this.scoreObject = data.saveBids;
            this.result1 = this.scoreObject.total;
            }

          if ('scoreBids' in data) {
            this.scoreObject = data.scoreBids;
            this.result2 = this.scoreObject.total;
            // const dialogConfig = new MatDialogConfig();
            // dialogConfig.data = this.result2;
            // dialogConfig.width = '30%';
            // this.matDialog.open(BidResponseDialogComponent, dialogConfig);
          }

        }
      });
      console.log('in form');

    }
  ngOnInit() {
    this.route.paramMap
      .subscribe((params: Params) => {
        this.auctionId = params.get('id');
        // console.log('aucuccuctioniiidd ---------->', this.auctionId);
      });

    // // this.ws.connect(message => this.subscribe());

    this.bidForm = new FormGroup({
      newPrice: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$')]),
      newCreditPeriod: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$')]),
      newQaqcCertificate: new FormControl('false'),
      newTypeOfDelivery: new FormControl('false'),
      newTimeOfDelivery: new FormControl('', [
        Validators.required,
      ]),
      });

    this.auctionDataService.getAuctionById(BidFormComponent.messageKey, 'auctionSingle', this.auctionId);
    // console.log('in oninit form');

    // this.ws.getBidScore(bid);
    this.bidForm.valueChanges.subscribe(() => {
      const bid = {
        price: this.bidForm.value.newPrice,
        creditPeriod: this.bidForm.value.newCreditPeriod,
        qaqcCertificate: this.bidForm.value.newQaqcCertificate,
        typeOfSupply: this.bidForm.value.newTypeOfDelivery,
        timeOfDelivery: this.bidForm.value.newTimeOfDelivery,
        };
      this.auctionDataService.getScore(BidFormComponent.messageKey, bid, 'scoreBids', this.auctionId);
    });
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
    dialogConfig.height = '55%';
    this.matDialog.open(BidSubmissionDialogComponent, dialogConfig);

  }


  seeScore(form: FormGroup) {
    // this.auctionDataService.getScore(BidFormComponent.messageKey, bid, 'scoreBids', this.auctionId);

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
      auth: this.auctionSingle.socketToken
    };
    if (this.isOwner) {
      this.subscriptionRef = this.ws.subscribe(
        '/topic/admin/' + this.auctionSingle.auctionId,
        BidFormComponent.messageKey,
        'newbid', this.auctionSingle.socketToken);
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
        '/topic/supplier/' + this.auctionSingle.auctionId + '/' + this.tokenBody.sub,
        BidFormComponent.messageKey,
        'newbid', this.auctionSingle.socketToken);
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

  newTimeOfDelivery = (d: Date): boolean => {
    const currentDate = new Date();
    if (d.getMonth() === currentDate.getMonth()
      && d.getFullYear() === currentDate.getFullYear()) {
      return ((d.getDate() > currentDate.getDate() + 4));
    } else if (d.getMonth() > currentDate.getMonth() || d.getFullYear() > currentDate.getFullYear()) {
      return true;
    }
  }

}
