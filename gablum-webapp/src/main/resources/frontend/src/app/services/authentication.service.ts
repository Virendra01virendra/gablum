import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginToken: string;
  private jwtHelper: JwtHelper;

  constructor() {
    this.jwtHelper = new JwtHelper();
  }

  setToken(token: string) {
    this.loginToken = token;
    localStorage.setItem('auth_token', this.loginToken);
  }

  removeToken() {
    this.loginToken = null;
    localStorage.removeItem('auth_token');
  }

  getToken() {
    this.loginToken = localStorage.getItem('auth_token');
    return this.loginToken;
  }

  isAuthorized() {
    const token = this.getToken();
    if (token === undefined || token === null) {
      return false;
    }
    if (this.jwtHelper.isTokenExpired(token)) {
      this.removeToken();
      return false;
    }
    return true;
  }
}
