import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileDataService } from 'src/app/services/profile-data.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.css']
})
export class EditProfileDialogComponent implements OnInit {

  public static messageKey = 'edit-profile-dialog-component';

  get name() {
    return this.editProfileForm.get('name');
  }

  get email() {
    return this.editProfileForm.get('email');
  }

  get address() {
    return this.editProfileForm.get('address');
  }

  get phone() {
    return this.editProfileForm.get('phone');
  }

  get companyName() {
    return this.editProfileForm.get('companyName');
  }

  get userName() {
    return this.editProfileForm.get('userName');
  }

  get businessLicense() {
    return this.editProfileForm.get('businessLicense');
  }

  get password() {
    return this.editProfileForm.get('password');
  }

  get role() {
    return this.editProfileForm.get('role');
  }

  get businessDomain() {
    return this.editProfileForm.get('businessDomain');
  }

  get businessSubDomain() {
    return this.editProfileForm.get('businessSubDomain');
  }

  subDomains = ['Raw Materials', 'Crops', 'Machinery'];

  editProfileForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    address : new FormControl(''),
    phone : new FormControl('', Validators.compose([Validators.required, Validators.maxLength(14),
      Validators.pattern('^[0-9-.+]*$')])),
    companyName : new FormControl(''),
    userName : new FormControl(''),
    businessLicense : new FormControl('', Validators.compose([Validators.required,
      Validators.pattern('^([0][1-9]|[1-2][0-9]|[3][0-7])([A-Z]{5})([0-9]{4})([A-Z]{1}[1-9A-Z]{1})([Z]{1})([0-9A-Z]{1})+$')])),
    password : new FormControl(''),
    role : new FormControl(''),
    businessDomain : new FormControl(''),
    businessSubDomain : new FormControl('')
  });
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private profileService: ProfileDataService) { }

  ngOnInit() {
    console.log('dailog data::', this.data);
  }

  // getErrorMessage1() {
  //   return this.name.hasError('required') ? '*You must enter a name' :
  //           '';
  // }

  // getErrorMessage2() {
  //   return this.email.hasError('required') ? '*Email required' :
  //   this.email.hasError('email') ? '*Not a valid email' :
  //   '';
  // }

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

  // getErrorMessage5() {
  //   return this.userName.hasError('required') ? '*You must enter a Username' :
  //       this.userName.hasError('pattern') ? '*Not a valid Username' :
  //       this.userName.hasError('minlength') ? '*Minimum 8 characters' :
  //           '';
  // }

  // getErrorMessage6() {
  //   return this.password.hasError('required') ? '*You must enter a Password' :
  //       this.password.hasError('pattern') ? '*Not a valid Password' :
  //       this.password.hasError('minlength') ? '*Minimum 8 characters' :
  //           '';
  // }

  getErrorMessage7() {
    return this.businessLicense.hasError('required') ? '*Required' :
        this.businessLicense.hasError('pattern') ? '*Invalid GSTIN no.' :
        '';
  }

  // getErrorMessage8() {
  //   return this.role.hasError('required') ? '*Required' :
  //   '';
  // }

  onConfirm(data) {
    this.profileService.editUserProfile(EditProfileDialogComponent.messageKey, data, 'profile');
    this.profileService.getUserProfileByEmail('@all', 'profile');
  }
}
