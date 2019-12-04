import { Injectable } from '@angular/core';
import { LoginRequest } from '../interfaces/login-request';
import { LoginToken } from '../interfaces/login-token';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommunicatorService } from './communicator.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor(
    private http: HttpClient,
    private comms: CommunicatorService
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
      .pipe(
        catchError(err => {
          this.comms.postMessage(
            this,
            '@all',
            {loginResult: {accessToken: null}});
          return throwError(err);
        })
      ).subscribe(res => {
        this.comms.postMessage(
          this,
          '@all',
          {loginResult: {accessToken: res}}
        );
      });
  }

  logout() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
    this.http.post<LoginToken>(
      environment.loginApi,
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
