import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileDataService } from 'src/app/services/profile-data.service';
import { LoggerService } from 'src/app/services/logger.service';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.css']
})
export class EditProfileDialogComponent implements OnInit {

  public static messageKey = 'edit-profile-dialog-component';

  public profile: Profile;

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

  phoneErrorMessage() {
    return this.phone.hasError('required') ? '*Required' :
        this.phone.hasError('pattern') ? '*Not a valid phone no' :
        this.phone.hasError('minlength') ? '*Minimum 10 characters' :
        this.phone.hasError('maxlength') ? '*Invalid Phone no.' :
            '';
  }

  commpanyNameErrorMessage() {
    return this.companyName.hasError('required') ? '*Required' :
    '';
  }

  businessLicenseErrorMessage() {
    return this.businessLicense.hasError('required') ? '*Required' :
        this.businessLicense.hasError('pattern') ? '*Invalid GSTIN no.' :
        '';
  }

  onConfirm() {
    this.profileService.editUserProfile(EditProfileDialogComponent.messageKey, this.editProfileForm.value,  'profile');
  }
}
