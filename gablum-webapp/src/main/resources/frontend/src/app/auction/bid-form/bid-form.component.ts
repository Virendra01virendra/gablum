import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Ibid } from '../ibid';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';

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

  bidForm: FormGroup;

  url = 'localhost:8080/api/auctions/auctions/bid';

  constructor(public http: HttpClient) { }
  ngOnInit() {

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
    timeOfDelivery: form.value.newTimeOfDelivery,
    typeOfDelivery: form.value.newTypeOfDelivery,
    creditPeriod: form.value.newCreditPeriod,
    qaqcCertificate: form.value.newQaqcCertificate
    };
    console.log('making api call', bid);
    this.http.post<Ibid>(this.url, bid, httpOptions).subscribe((response) => {
      console.log('response ::', response);
    });
  }

}
