import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Router } from '@angular/router';
import { NetworkingService } from '../services/networking.service';
import { LoginToken } from '../interfaces/login-token';
import { LoginDataService } from '../services/login-data.service';
import { CommunicatorService } from '../services/communicator.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public static messageKey = 'login-component';

  get password() {
    return this.loginForm.get('password');
  }
  get userName() {
    return this.loginForm.get('username');
  }

  loginForm = new FormGroup({
    username : new FormControl('', Validators.compose([Validators.required,
      Validators.minLength(3)])),
    password : new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9-.]*$'),
    Validators.minLength(3)]))
  });

  constructor(
    private router: Router,
    private loginService: LoginDataService,
    private comms: CommunicatorService) {
      this.comms.getMessages().subscribe(message => {
        if (message.dest === '@all' || message.dest === LandingPageComponent.messageKey) {
          const data = message.data;
          if ('loginResult' in data) {
            const loginToken: LoginToken = data.loginResult.accessToken;
            // console.log(loginToken.accessToken);
            if (loginToken === undefined || loginToken === null) {

            } else {
              this.router.navigate(['dashboard']);
            }
          }
        }
      });
  }

  ngOnInit() {
  }
  getErrorMessage1() {
    return this.userName.hasError('required') ? '*You must enter a Username' :
        // this.userName.hasError('pattern') ? '*Not a valid Username' :
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
    // this.networking.postData<LoginToken>()
    this.loginService.login(this.loginForm.value);
    // this.router.navigate(['/dashboard']);
  }


}

