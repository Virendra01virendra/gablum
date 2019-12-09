import { Component, OnInit, Inject } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Proposal } from 'src/app/interfaces/proposal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-extend-proposal-dialog',
  templateUrl: './extend-proposal-dialog.component.html',
  styleUrls: ['./extend-proposal-dialog.component.css']
})
export class ExtendProposalDialogComponent implements OnInit {

  public extendProposalForm: FormGroup;

  public proposal: Proposal;

  get regStartDate() {
    return this.extendProposalForm.get('regStartDate');
  }

  get regEndDate() {
    return this.extendProposalForm.get('regEndDate');
  }

  get deliveryDate() {
    return this.extendProposalForm.get('deliveryDate');
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private proposalService: ProposalsDataService,
    private logger: LoggerService
  ) {
    logger.log(Date.parse(this.data.regStartDate));

    this.extendProposalForm = new FormGroup({
      regStartDate: new FormControl({ value: '' }, [Validators.required]),
      regEndDate: new FormControl({ value: '' }, [Validators.required]),
    });
  }

  ngOnInit() {
    console.log('dialog data::::', this.data);
  }
  onSubmit() {
    // this.proposal.regStartDate = this.extendProposalForm.value.regStartDate;
    // this.proposal.regEndDate = this.extendProposalForm.value.regEndDate;
    this.logger.log('extending the registration period for a proposal.');
    // console.log('dialog data::::', this.data);
    this.logger.log(this.proposal);
    const proposalValue: Proposal = this.extendProposalForm.value;
    proposalValue.regStartDate = this.data.regStartDate;
    proposalValue.regEndDate = this.data.regEndDate;
    this.proposalService.extendProposal('@all', proposalValue, 'proposal');
    this.router.navigate(['/dashboard']);
  }
  RegStartDateFilter = (d: Date): boolean => {
    // Prevent dates after delivery date
    return d < new Date(this.data.deliveryDate);
    // return true;
  }

  RegEndDateFilter = (d: Date): boolean => {
    // Prevent dates before registration start date
    return d > new Date(this.data.regStartDate) && d < new Date(this.data.deliveryDate);
  }

}
