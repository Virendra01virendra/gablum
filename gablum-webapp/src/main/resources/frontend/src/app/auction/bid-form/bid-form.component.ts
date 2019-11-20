import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
import { Ibid } from '../ibid';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.css']
})
export class BidFormComponent implements OnInit {

  bidForm: FormGroup;

  url = 'localhost:8080/api/auctions/bid';

  constructor(public http: HttpClient) { }
  ngOnInit() {

    this.bidForm = new FormGroup({
      newPrice: new FormControl(''),
      newCreditPeriod: new FormControl(''),
      newQaqcCertificate: new FormControl(''),
      newTypeOfDelivery: new FormControl(''),
      newTimeOfDelivery: new FormControl(''),
      });

  }

  onSubmit(form: FormGroup) {
    // console.log('price?', form.value.newPrice);
    let score = this.http.post<Ibid>(this.url, this.bidForm);
    console.log(score);
  }

}
