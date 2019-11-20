import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-proposal-form2',
  templateUrl: './new-proposal-form2.component.html',
  styleUrls: ['./new-proposal-form2.component.css']
})
export class NewProposalForm2Component implements OnInit {

  paramForm = new FormGroup({
    price: new FormControl(''),
    deliveryDate: new FormControl(''),
    creditPeriod: new FormControl(''),
    qualityCertification: new FormControl(''),
    methodOfSupply: new FormControl('')
  });
  constructor(private router: Router) { }

  ngOnInit() {
  }

onNext() {
  this.router.navigate(['/new/form3']);
}

}



