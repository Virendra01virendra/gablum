import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormConfirmDialogComponent } from '../form-confirm-dialog/form-confirm-dialog.component';
import { MatDialog} from '@angular/material';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-new-proposal-form1',
  templateUrl: './new-proposal-form1.component.html',
  styleUrls: ['./new-proposal-form1.component.css']
})

export class NewProposalForm1Component implements OnInit {

  showTicks = false;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private logger: LoggerService) { }

  subDomains = ['Raw material', 'Crops', 'Machinery'];
  invert = false;
  thumbLabel = false;
  value = 0;
  vertical = false;
  panelOpenState = false;
  editable = false;

  productSpecsForm = new FormGroup({
    businessDomain: new FormControl(''),
    businessSubDomain: new FormControl('', [Validators.required]),
    productName: new FormControl('', [Validators.required, Validators.pattern('^[0-9a-zA-Z]*$'), Validators.minLength(3), 
    Validators.maxLength(25)]),
    quantity: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]),
    images: new FormControl('')
  });

    paramForm = new FormGroup({
    price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1), Validators.minLength(2)]),
    priceWeight: new FormControl(''),
    deliveryDate: new FormControl({value: ''}, Validators.required),
    deliveryDateWeight: new FormControl(''),
    creditPeriod: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]),
    creditPeriodWeight: new FormControl(''),
    qualityCertification: new FormControl('', [Validators.required]),
    qualityCertificationWeight: new FormControl(''),
    methodOfSupply: new FormControl('', [Validators.required]),
    methodOfSupplyWeight: new FormControl('')
  });

  timeForm = new FormGroup({
    regStartDate: new FormControl({value: ''}, [Validators.required]),
    regEndDate: new FormControl({value: ''}, [Validators.required]),
    auctionStartDate: new FormControl({value: ''}, [Validators.required]),
    auctionEndDate: new FormControl({value: ''}, [Validators.required])
  });

  formatLabel(value: number) {
    return value;
  }
  ngOnInit() {
  }

  onNext1(form: FormGroup) {
    this.logger.log('name' + form.value.productName);
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
    // this.logger.log(this.paramForm.value);
    // this.logger.log('del-date--' + this.paramForm.value.deliveryDate +
    // 'price--' + this.paramForm.value.price );
    return d < this.paramForm.value.deliveryDate ;
    // return true;
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
    this.logger.log('Auc-start-date---' + this.timeForm.value.auctionStartDate);
    return d > this.timeForm.value.auctionStartDate ;
  }

}
