import { Component, OnInit, Input, Inject } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebsocketService } from 'src/app/services/websocket.service';
import { LoggerService } from 'src/app/services/logger.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BidDialogComponent } from './bid-dialog/bid-dialog.component';
import { ActivatedRoute, Params } from '@angular/router';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { Auction } from '../../interfaces/auction';
import { BidResponseDialogComponent } from '../bid-response-dialog/bid-response-dialog.component';

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

export class BidFormComponent implements OnInit {
  public static messageKey = 'BidFormComponent';
  bidForm: FormGroup;
  url = 'localhost:8080/api/auctions/auctions/bid';
  result1;
  result2;
  result3;
  auctionId: string;
  auction;
  scoreObject: {
    score: number;
  };
  constructor(
    public http: HttpClient,
    private ws: WebsocketService,
    private logger: LoggerService,
    private route: ActivatedRoute,
    private auctionDataService: AuctionsDataService,
    private comms: CommunicatorService,
    private matDialog: MatDialog
    ) {
      comms.getMessages().subscribe(msg => {
        if (msg.dest === BidFormComponent.messageKey || msg.dest === '@all') {
          const data = msg.data;
          if ('auctionSingle' in data) {
              this.auction = data.auctionSingle;
              this.logger.log(this.auction);
          }

          if ('saveBids' in data) {
            console.log('insde key data -->', data);
            this.scoreObject = data.saveBids;
            console.log('bid stored and score is', this.scoreObject.score);
            this.result1 = 'Bid is stored, and your score is' + this.scoreObject.score;
            // const dialogConfig = new MatDialogConfig();
            // dialogConfig.data = this.result1;
            // let dialogRef = this.matDialog.open(BidResponseDialogComponent, dialogConfig);
          }

          if ('scoreBids' in data) {
            console.log('insde key data -->', data);
            this.scoreObject = data.scoreBids;
            console.log('bid score is', this.scoreObject.score);
            this.result2 = 'Your bid score is' + this.scoreObject.score;
          }

        }
      });

    }
  ngOnInit() {
    this.route.paramMap
      .subscribe((params: Params) => {
        this.auctionId = params.get('id');
        console.log('aucuccuctioniiidd ---------->', this.auctionId);
      });

    this.ws.connect(message => this.subscribe());

    this.bidForm = new FormGroup({
      newPrice: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$')]),
      newCreditPeriod: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$')]),
      newQaqcCertificate: new FormControl('false'),
      newTypeOfDelivery: new FormControl('false'),
      newTimeOfDelivery: new FormControl(''),
      });

    this.auctionDataService.getAuctionById(BidFormComponent.messageKey, 'auctionSingle', this.auctionId);

  }

  onSubmit(form: FormGroup) {
    // console.log('price----->', form.value.newTimeOfDelivery);
    const bid = {
    price: form.value.newPrice,
    creditPeriod: form.value.newCreditPeriod,
    qaqcCertificate: form.value.newQaqcCertificate,
    typeOfSupply: form.value.newTypeOfDelivery,
    timeOfDelivery: form.value.newTimeOfDelivery,
    };

    this.logger.log('making api call', bid);

    // this.http.post<Ibid>(this.url, bid, httpOptions).subscribe((response) => {
    //   console.log('response ::', response);
    // });

    // this.ws.sendBid(bid);

    // this.http.post('http://localhost:8080/api/auctions/auctions/' + this.auctionId + '/bid', bid, httpOptions)
    // .subscribe(Response => {console.log(Response); });

    this.auctionDataService.saveBid(BidFormComponent.messageKey, bid, 'saveBids', this.auctionId);


  }


  seeScore(form: FormGroup) {
    const bid = {
      price: form.value.newPrice,
      creditPeriod: form.value.newCreditPeriod,
      qaqcCertificate: form.value.newQaqcCertificate,
      typeOfSupply: form.value.newTypeOfDelivery,
      timeOfDelivery: form.value.newTimeOfDelivery,
      };

    // this.ws.getBidScore(bid);

    this.auctionDataService.getScore(BidFormComponent.messageKey, bid, 'scoreBids', this.auctionId);


    console.log('dataaaaaaaaaa', this.result1);
    // this.dialog.open(BidDialogComponent, {
    //   height: '400px',
    //   width: '600px',
    // data: this.result1});
  }

  bidList() {
    this.ws.fetchBids();
  }

  subscribe() {
    this.ws.subscribe(
      '/topic/*',
      BidFormComponent.messageKey,
      'newbid').subscribe(message => {
        this.logger.log('message received is ::', message);
        if (message.dest === '@all' || message.dest === BidFormComponent.messageKey) {
          const data = message.data;
          if ('getscore' in data) {
            this.result1 = data.getscore.body;
            this.logger.log('message received is ::', data.getscore.body);
          }
          if ('newbid' in data) {
            this.result2 = data.newbid.body;
            this.logger.log('message received is ::', data.newbid.body);
            // this.bids.push(this.testBid);
          }
          if ('fetchbid' in data) {
            this.result3 = data.fetchbid.body;
            this.logger.log('message received is ::', data.newbid.body);
            // this.bids.push(this.testBid);
          }
        }
      });


  }

}
