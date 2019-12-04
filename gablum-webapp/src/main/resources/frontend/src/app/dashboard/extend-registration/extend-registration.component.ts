import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-extend-registration',
  templateUrl: './extend-registration.component.html',
  styleUrls: ['./extend-registration.component.css']
})
export class ExtendRegistrationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  myFilter3 = (data): boolean => {
    // Prevent dates before auction start date
    const d = data.regStartDate;
    return d > this.data.regStartDate ;
  }
}
