import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    address : new FormControl(''),
    phone : new FormControl(''),
    companyName : new FormControl(''),
    userName : new FormControl(''),
    businessLicense : new FormControl(''),
    BCryptPassword : new FormControl(''),
    role : new FormControl(''),
    domainName : new FormControl(''),
    subDomain : new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

}
