import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-proposal-card-dialog',
  templateUrl: './proposal-card-dialog.component.html',
  styleUrls: ['./proposal-card-dialog.component.css']
})
export class ProposalCardDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
