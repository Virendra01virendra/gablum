import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logForm = new FormGroup({
    userName : new FormControl(''),
    BCryptPassword : new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }

}
