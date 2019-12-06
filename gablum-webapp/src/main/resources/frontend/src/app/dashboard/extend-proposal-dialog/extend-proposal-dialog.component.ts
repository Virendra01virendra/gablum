import { Component, OnInit, Inject } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Proposal } from 'src/app/interfaces/proposal';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-extend-proposal-dialog',
  templateUrl: './extend-proposal-dialog.component.html',
  styleUrls: ['./extend-proposal-dialog.component.css']
})
export class ExtendProposalDialogComponent implements OnInit {

  public static messageKey = 'extend-proposal-dialog-component';
  // startDate: string;
  // endDate: string;

  // get regStartDate() {
  //   return this.extendProposalForm.get('regStartDate');
  // }

  // get regEndDate() {
  //   return this.extendProposalForm.get('regEndDate');
  // }

  extendProposalForm = new FormGroup({
    regStartDate: new FormControl({ value: '' }, [Validators.required]),
    regEndDate: new FormControl({ value: '' }, [Validators.required])

  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private proposalService: ProposalsDataService,
    private logger: LoggerService,
    public dialogRef: MatDialogRef<ExtendProposalDialogComponent>
  ) {
    console.log("this is sparta :::", this.data.deliveryDate);
   }
  // console.log('type of date --------------- ', typeof(data.regStartDate));
  // this.startDate = (data.regStartDate);
  // this.endDate = data.regEndDate;
  ngOnInit() {
    // this.extendProposalForm.value.regStartDate = moment(Date.parse(this.startDate));
    // this.extendProposalForm.value.regEndDate = moment(Date.parse(this.endDate));
  }
  onSubmit(proposal: Proposal) {
    proposal.regStartDate = this.extendProposalForm.value.regStartDate;
    proposal.regEndDate = this.extendProposalForm.value.regEndDate;
    this.logger.log('extending the registration period for a proposal.');
    this.logger.log(proposal);
    this.proposalService.extendProposal('@all', proposal, 'proposals');
    this.router.navigate(['/dashboard']);
    this.proposalService.extendProposal(ExtendProposalDialogComponent.messageKey, this.extendProposalForm.value, 'proposal')
      .subscribe((response) => {
        this.proposalService.getAllProposals(ExtendProposalDialogComponent.messageKey, 'proposals');
        this.dialogRef.close(ExtendProposalDialogComponent);
      });
  }
  RegStartDateFilter = (d: Date): boolean => {
    // Prevent dates after delivery date
    return d < new Date(this.data.deliveryDate);
    // return true;
  }

  RegEndDateFilter = (d: Date): boolean => {
    // Prevent dates before registration start date
    return d > this.data.regStartDate && d < this.data.deliveryDate;
  }

}
