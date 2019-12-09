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

  extendProposalForm = new FormGroup({
    regStartDate: new FormControl({ value: '' }, [Validators.required]),
    regEndDate: new FormControl({ value: '' }, [Validators.required])

  });

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
    private logger: LoggerService,
    public dialogRef: MatDialogRef<ExtendProposalDialogComponent>
  ) {}

<<<<<<< HEAD
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
=======
  ngOnInit() {}

  onSubmit(proposal: Proposal, extendProposalForm) {
    proposal.regStartDate = this.extendProposalForm.value.regStartDate;
    proposal.regEndDate = this.extendProposalForm.value.regEndDate;
    this.logger.log('extending the registration period for a proposal.');
    this.logger.log(proposal);
>>>>>>> d42e517a283e477a1e8a8501a2a996d1f1df660b
    this.router.navigate(['/dashboard']);
    const extendRegistrationDate = {
      regStartDate: proposal.regStartDate,
      regEndDate: proposal.regEndDate,
      proposalId: proposal.proposalId
    };
    const extendRegistrationJSON = JSON.parse(JSON.stringify(extendRegistrationDate));
    console.log('Patch Data :::', extendRegistrationJSON);
    this.proposalService.extendProposal(ExtendProposalDialogComponent.messageKey, extendRegistrationJSON, 'proposals')
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
<<<<<<< HEAD
    return d > new Date(this.data.regStartDate) && d < new Date(this.data.deliveryDate);
=======
    return d >= new Date(this.extendProposalForm.value.regStartDate) && d < new Date(this.data.deliveryDate);
>>>>>>> d42e517a283e477a1e8a8501a2a996d1f1df660b
  }

}
