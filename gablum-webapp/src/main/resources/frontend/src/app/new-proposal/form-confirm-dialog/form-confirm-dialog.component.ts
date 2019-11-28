import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';

@Component({
  selector: 'app-form-confirm-dialog',
  templateUrl: './form-confirm-dialog.component.html',
  styleUrls: ['./form-confirm-dialog.component.css']
})
export class FormConfirmDialogComponent implements OnInit {

  public static messageKey = 'form-confirm-dialog-component';

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private proposalService: ProposalsDataService) { }

  ngOnInit() {
    console.log( ' data ::', this.data.form1 , this.data.form2, this.data.form3);
  }


  onConfirm(data) {
    this.router.navigate(['/dashboard']);
    console.log('price---' + data.form2.value.price);
    const proposalFormDetails = {
    businessDomain: data.form1.value.businessDomain,
    businessSubDomain: data.form1.value.businessSubDomain,
    productName: data.form1.value.productName,
    quantity: data.form1.value.quantity,
    price: data.form2.value.price,
    deliveryDate: data.form2.value.deliveryDate,
    creditPeriod: data.form2.value.creditPeriod,
    qualityCertificate: data.form2.value.qualityCertificate,
    methodOfSupply: data.form2.value.methodOfSupply,
    regStartDate: data.form3.value.regStartDate,
    regEndDate: data.form3.value.regEndDate,
    auctionStartDate: data.form3.value.auctionStartDate,
    auctionEndDate: data.form3.value.auctionEndDate
    };
    const proposalJSON = JSON.parse(JSON.stringify(proposalFormDetails));
    this.proposalService.saveProposal(FormConfirmDialogComponent.messageKey, proposalJSON, 'form-confirm');
  }
}
