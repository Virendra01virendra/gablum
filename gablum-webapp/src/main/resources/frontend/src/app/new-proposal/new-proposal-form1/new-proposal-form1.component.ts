import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-proposal-form1',
  templateUrl: './new-proposal-form1.component.html',
  styleUrls: ['./new-proposal-form1.component.css']
})
export class NewProposalForm1Component implements OnInit {

  constructor(private router: Router) { }

  productSpecsForm = new FormGroup({
    subDomain: new FormControl(''),
    productName: new FormControl(''),
    quantity: new FormControl(''),
    images: new FormControl('')
  });

  ngOnInit() {
  }

  onNext() {
    this.router.navigate(['/new/form2']);
  }

}
