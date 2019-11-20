import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.css']
})
export class BidFormComponent implements OnInit {

  bidForm = new FormGroup({
  newPrice: new FormControl(''),
  newCreditPeriod: new FormControl(''),
  newQaqcCertificate: new FormControl(''),
  newTypeOfDelivery: new FormControl(''),
  newTimeOfDelivery: new FormControl(''),
  });
  constructor() { }
  ngOnInit() {

  }

}
