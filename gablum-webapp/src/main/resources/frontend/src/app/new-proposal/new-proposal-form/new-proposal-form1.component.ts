import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormConfirmDialogComponent } from '../form-confirm-dialog/form-confirm-dialog.component';
import { MatDialog} from '@angular/material';

@Component({
  selector: 'app-new-proposal-form1',
  templateUrl: './new-proposal-form1.component.html',
  styleUrls: ['./new-proposal-form1.component.css']
})

export class NewProposalForm1Component implements OnInit {

  showTicks = false;

  constructor(private router: Router, private dialog: MatDialog) { }

  subDomains = ['Raw material', 'Crops', 'Machinery'];
  disabled = false;
  invert = false;
  thumbLabel = false;
  value = 0;
  vertical = false;
  panelOpenState = false;

  productSpecsForm = new FormGroup({
    businessDomain: new FormControl({value: '', disabled: true}),
    businessSubDomain: new FormControl(''),
    productName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    quantity: new FormControl('', [Validators.required, Validators.pattern('^[1-9]*$'), Validators.min(1)]),
    images: new FormControl('')
  });

    paramForm = new FormGroup({
    price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(2)]),
    priceWeight: new FormControl(''),
    deliveryDate: new FormControl({value: '', disabled: true}, Validators.required),
    deliveryDateWeight: new FormControl(''),
    creditPeriod: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]),
    creditPeriodWeight: new FormControl(''),
    qualityCertification: new FormControl('', [Validators.required]),
    qualityCertificationWeight: new FormControl(''),
    methodOfSupply: new FormControl('', [Validators.required]),
    methodOfSupplyWeight: new FormControl('')
  });

  timeForm = new FormGroup({
    regStartDate: new FormControl({value: '', disabled: true}, [Validators.required]),
    regEndDate: new FormControl({value: '', disabled: true}, [Validators.required]),
    auctionStartDate: new FormControl({value: '', disabled: true}, [Validators.required]),
    auctionEndDate: new FormControl({value: '', disabled: true}, [Validators.required])
  });

  formatLabel(value: number) {
    return value;
  }
  ngOnInit() {
  }

  onNext1(form: FormGroup) {
    console.log('name' + form.value.productName);
  }

  onSubmit() {
  this.dialog.open(FormConfirmDialogComponent,
    {data: {form2: this.paramForm, form1: this.productSpecsForm,
      form3: this.timeForm}});
  }

  // myFilter1 = (d: Date): boolean => {
  //   // Prevent dates before auction start date
  //   return d > this.timeForm.value.auctionStartDate ;
  // }

  myFilter2 = (d: Date): boolean => {
    // Prevent dates before auction start date
    console.log('del-date--' + this.paramForm.value.deliveryDate +
    'price--' + this.paramForm.value.price );
    return d < this.paramForm.value.deliveryDate ;
  }

  myFilter3 = (d: Date): boolean => {
    // Prevent dates before auction start date
    return d > this.timeForm.value.regStartDate ;
  }
  myFilter4 = (d: Date): boolean => {
    // Prevent dates before auction start date
    return d > this.timeForm.value.regEndDate ;
  }
  myFilter5 = (d: Date): boolean => {
    // Prevent dates before auction start date
    console.log('Auc-start-date---' + this.timeForm.value.auctionStartDate);
    return d > this.timeForm.value.auctionStartDate ;
  }

}
