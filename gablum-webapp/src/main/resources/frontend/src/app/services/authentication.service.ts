import { Injectable } from '@angular/core';
import { Profile } from 'selenium-webdriver/firefox';
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

  setProfile(profile: Profile) {
    localStorage.setItem('profile', JSON.stringify(profile));
  }

  getProfile() {
    const profileStr = localStorage.getItem('profile');
    if (profileStr !== undefined && profileStr !== null) {
      return JSON.parse(profileStr);
    }
    return null;
  }

  clearProfile() {
    localStorage.removeItem('profile');
  }
}
