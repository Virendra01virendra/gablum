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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private proposalService: ProposalsDataService,
    private logger: LoggerService
  ) { }

  extendProposalForm = new FormGroup({
    regStartDate: new FormControl({ value: '' }, [Validators.required]),
    regEndDate: new FormControl({ value: '' }, [Validators.required]),
  });

  ngOnInit() {
  }
  onSubmit(proposal: Proposal) {
    console.log('extending the registration period for a proposal.');
    this.proposalService.extendProposal(proposal, '@all', 'proposals');
    this.router.navigate(['/dashboard']);
  }

}
