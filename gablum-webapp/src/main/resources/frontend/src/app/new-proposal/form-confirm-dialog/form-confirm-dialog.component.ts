import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-confirm-dialog',
  templateUrl: './form-confirm-dialog.component.html',
  styleUrls: ['./form-confirm-dialog.component.css']
})
export class FormConfirmDialogComponent implements OnInit {


  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  ngOnInit() {
    console.log( ' data ::', this.data.form1 , this.data.form2, this.data.form3);
  }

  onConfirm() {
    this.router.navigate(['/dashboard']);
  }

}
