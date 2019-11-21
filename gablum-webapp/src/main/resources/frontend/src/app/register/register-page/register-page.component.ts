import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { noConflict } from 'q';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  get name() {
    return this.registrationForm.get('name');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get address() {
    return this.registrationForm.get('address');
  }

  get phone() {
    return this.registrationForm.get('phone');
  }

  get companyName() {
    return this.registrationForm.get('companyName');
  }

  get userName() {
    return this.registrationForm.get('userName');
  }

  get businessLicense() {
    return this.registrationForm.get('businessLicense');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get role() {
    return this.registrationForm.get('role');
  }

  get businessDomain() {
    return this.registrationForm.get('businessDomain');
  }

  get businessSubDomain() {
    return this.registrationForm.get('businessSubDomain');
  }

  subDomains = ['Raw Materials', 'Crops', 'Machinery'];

  registrationForm = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', Validators.compose([Validators.required, Validators.email])),
    address : new FormControl(''),
    phone : new FormControl('', Validators.compose([Validators.required, Validators.maxLength(14),
      Validators.pattern('^[0-9-.+]*$')])),
    companyName : new FormControl(''),
    userName : new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9-.]*$'),
    Validators.minLength(8)])),
    businessLicense : new FormControl('', Validators.compose([Validators.required,
      Validators.pattern('^([0][1-9]|[1-2][0-9]|[3][0-7])([A-Z]{5})([0-9]{4})([A-Z]{1}[1-9A-Z]{1})([Z]{1})([0-9A-Z]{1})+$')])),
    password : new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9-.]*$'),
    Validators.minLength(8)])),
    role : new FormControl('', Validators.required),
    businessDomain : new FormControl(''),
    businessSubDomain : new FormControl('')
  });
  constructor() { }

  ngOnInit() {
  }

  getErrorMessage1() {
    return this.name.hasError('required') ? '*You must enter a name' :
            '';
  }

  getErrorMessage2() {
    return this.email.hasError('required') ? '*Email required' :
    this.email.hasError('email') ? '*Not a valid email' :
    '';
  }

  getErrorMessage3() {
    return this.phone.hasError('required') ? '*Required' :
        this.phone.hasError('pattern') ? '*Not a valid phone no' :
        this.phone.hasError('minlength') ? '*Minimum 10 characters' :
        this.phone.hasError('maxlength') ? '*Invalid Phone no.' :
            '';
  }

  getErrorMessage4() {
    return this.companyName.hasError('required') ? '*Required' :
    '';
  }

  getErrorMessage5() {
    return this.userName.hasError('required') ? '*You must enter a Username' :
        this.userName.hasError('pattern') ? '*Not a valid Username' :
        this.userName.hasError('minlength') ? '*Minimum 8 characters' :
            '';
  }

  getErrorMessage6() {
    return this.password.hasError('required') ? '*You must enter a Password' :
        this.password.hasError('pattern') ? '*Not a valid Password' :
        this.password.hasError('minlength') ? '*Minimum 8 characters' :
            '';
  }

  getErrorMessage7() {
    return this.businessLicense.hasError('required') ? '*Required' :
        this.businessLicense.hasError('pattern') ? '*Invalid GSTIN no.' :
        '';
  }

  getErrorMessage8() {
    return this.role.hasError('required') ? '*Required' :
    '';
  }
}
