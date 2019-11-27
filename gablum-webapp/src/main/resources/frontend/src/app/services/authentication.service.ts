import { Injectable } from '@angular/core';
// import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginToken: string;
  private roles: string[];
  private isAuthenticated = false;

  constructor() {
  }

  setAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }

  setRoles(roles: string[]) {
    this.roles = roles;
  }

  hasRole(role: string) {
    return (this.roles.indexOf(role) > -1);
  }

  getAuthenticated() {
    return this.isAuthenticated;
  }
}
