import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';

@Component({
  selector: 'app-sellers-list-dialog',
  templateUrl: './sellers-list-dialog.component.html',
  styleUrls: ['./sellers-list-dialog.component.css']
})
export class SellersListDialogComponent implements OnInit {

  public static messageKey = 'sellers-list-dialog-component';
  disabled = false;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private proposalService: ProposalsDataService) { }

  ngOnInit() {
  }

  onInvite() {
    this.disabled = true;
    this.proposalService.postInvitedSeller(SellersListDialogComponent.messageKey, this.data, 'invite-seller');
  }
}
