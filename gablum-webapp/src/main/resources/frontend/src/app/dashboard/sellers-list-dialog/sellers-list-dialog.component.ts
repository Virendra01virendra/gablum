import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sellers-list-dialog',
  templateUrl: './sellers-list-dialog.component.html',
  styleUrls: ['./sellers-list-dialog.component.css']
})
export class SellersListDialogComponent implements OnInit {

  disabled = false;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onClick() {
    this.disabled = true;
  }
}
