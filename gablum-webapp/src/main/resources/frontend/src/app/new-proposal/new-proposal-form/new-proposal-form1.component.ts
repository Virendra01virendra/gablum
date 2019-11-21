import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-proposal-form1',
  templateUrl: './new-proposal-form1.component.html',
  styleUrls: ['./new-proposal-form1.component.css']
})

export class NewProposalForm1Component implements OnInit {

  constructor(private router: Router) { }

  subDomains = ['Raw material', 'Crops', 'Machinery'];

  productSpecsForm = new FormGroup({
    businessDomain: new FormControl(''),
    businessSubDomain: new FormControl(''),
    productName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    quantity: new FormControl('', [Validators.required, Validators.pattern('^[1-9]*$'), Validators.min(1)]),
    images: new FormControl('')
  });

  disabled = false;
  invert = false;
  thumbLabel = false;
  value = 0;
  vertical = false;

  paramForm = new FormGroup({
    price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(2)]),
    priceWeight: new FormControl(''),
    deliveryDate: new FormControl('', Validators.required),
    deliveryDateWeight: new FormControl(''),
    creditPeriod: new FormControl('', [Validators.required, Validators.pattern('^[1-9]*$'), Validators.min(1)]),
    creditPeriodWeight: new FormControl(''),
    qualityCertification: new FormControl('', [Validators.required]),
    qualityCertificationWeight: new FormControl(''),
    methodOfSupply: new FormControl('', [Validators.required]),
    methodOfSupplyWeight: new FormControl('')
  });

  timeForm = new FormGroup({
    regStartDate: new FormControl(''),
    regEndDate: new FormControl(''),
    auctionStartDate: new FormControl(''),
    auctionEndDate: new FormControl('')
  });


  ngOnInit() {
  }

  onNext1(form: FormGroup) {
    console.log('name' + form.value.productName);
  }

}
