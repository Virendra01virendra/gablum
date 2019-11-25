import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Ibid } from '../ibid';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { WebsocketService } from 'src/app/services/websocket.service';
import {NewBid} from '../../interfaces/newbid';
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
  result;

  constructor(public http: HttpClient, private ws: WebsocketService) { }
  ngOnInit() {

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

    console.log('making api call', bid);

    // this.http.post<Ibid>(this.url, bid, httpOptions).subscribe((response) => {
    //   console.log('response ::', response);
    // });

    this.ws.sendBid(bid);

  }

  seeScore(form: FormGroup) {
    const bid = {
      price: form.value.newPrice,
      creditPeriod: form.value.newCreditPeriod,
      qaqcCertificate: form.value.newQaqcCertificate,
      typeOfSupply: form.value.newTypeOfDelivery,
      timeOfDelivery: form.value.newTimeOfDelivery,
      };

    this.ws.getBidScore(bid);
  }

  subscribe() {
    this.ws.subscribe(
      '/topic/newbid',
      BidFormComponent.messageKey,
      'newbid').subscribe(message => {
        console.log('message received is ::', message);
        if (message.dest === '@all' || message.dest === BidFormComponent.messageKey) {
          const data = message.data;
          if ('newbid' in data) {
            this.result = data.newbid.body;
            console.log('message received is ::', data.newbid.body);
            // this.bids.push(this.testBid);
          }
        }
      });
  }

}
