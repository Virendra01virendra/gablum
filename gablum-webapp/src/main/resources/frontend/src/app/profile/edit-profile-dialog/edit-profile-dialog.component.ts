import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.css']
})
export class EditProfileDialogComponent implements OnInit {

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
    // role : new FormControl('', Validators.required),
    businessDomain : new FormControl(''),
    businessSubDomain : new FormControl('')
  });
  constructor() { }

  ngOnInit() {
  }

}
