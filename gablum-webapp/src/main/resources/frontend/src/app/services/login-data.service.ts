import { Injectable } from '@angular/core';
import { LoginRequest } from '../interfaces/login-request';
import { LoginToken } from '../interfaces/login-token';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CommunicatorService } from './communicator.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor(
    private http: HttpClient,
    private comms: CommunicatorService,
    private logger: LoggerService
    ) { }

  login(params: LoginRequest) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
    this.http.post<LoginToken>(
      environment.loginApi,
      JSON.stringify(params),
      httpOptions
      )
      .subscribe(res => {
        this.comms.postMessage(
          this,
          '@all',
          {loginResult: {accessToken: res}}
        );
      },
      err => {
        this.logger.log(err);
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.comms.postMessage(
              this,
              '@all',
              {loginResult: {accessToken: err.status}}
            );
          } else {
            this.comms.postMessage(
              this,
              '@all',
              {loginResult: {accessToken: 500}}
            );
          }
        }
      });
  }

  logout() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
    this.http.post<LoginToken>(
      environment.logoutApi,
      '',
      httpOptions
      )
      .pipe(
        catchError(err => {
          this.comms.postMessage(
            this,
            '@all',
            {logoutResult: {accessToken: null}});
          return throwError(err);
        })
      ).subscribe(res => {
        this.comms.postMessage(
          this,
          '@all',
          {logoutResult: {accessToken: res}}
        );
      });
  }
}
