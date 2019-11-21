import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';
// import { MatError } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  get password() {
    return this.loginForm.get('password');
  }
  get userName() {
    return this.loginForm.get('userName');
  }

  loginForm = new FormGroup({
    userName : new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9-.]*$'),
      Validators.minLength(8)])),
    password : new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9-.]*$'),
    Validators.minLength(8)]))
  });
  constructor(private router: Router) { }

  ngOnInit() {
  }

  getErrorMessage1() {
    return this.userName.hasError('required') ? '*You must enter a Username' :
        this.userName.hasError('pattern') ? '*Not a valid Username' :
        this.userName.hasError('minlength') ? '*Minimum 8 characters' :
            '';
  }

  getErrorMessage2() {
    return this.password.hasError('required') ? '*You must enter a Password' :
        this.password.hasError('pattern') ? '*Not a valid Password' :
        this.password.hasError('minlength') ? '*Minimum 8 characters' :
            '';
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.router.navigate(['/dashboard']);
  }

}
