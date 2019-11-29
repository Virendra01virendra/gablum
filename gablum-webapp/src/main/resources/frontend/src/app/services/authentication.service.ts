import { Injectable } from '@angular/core';
import { ProfileDataService } from './profile-data.service';
import { CommunicatorService } from './communicator.service';
import { LoggerService } from './logger.service';
import { UserProfile } from '../interfaces/user';
import { Profile } from '../interfaces/profile';
// import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginToken: string;
  private roles: string[];
  private isAuthenticated = false;
  private profileData: Profile;

  constructor(
    private profile: ProfileDataService,
    private comms: CommunicatorService,
    private logger: LoggerService
    ) {
      this.profile.getUserProfileByEmail('@all', 'profile');
      comms.getMessages().subscribe(msg => {
        if (msg.dest === '@all') {
          const data = msg.data;

          if ('profile' in data) {
            this.profileData = data.profile;
            if (
              this.profileData === undefined ||
              this.profileData === null ||
              this.profileData.role === null ||
              this.profileData.role.length === 0) {
                this.clearProfile();
            } else {
              this.logger.log(this.profile);
              this.setProfile(this.profileData);
            }
          }
        }
      });
      this.getProfile();
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
    this.authChanged();
    this.isAuthenticated = true;
  }

  getProfile() {
    const profileStr = localStorage.getItem('profile');
    if (profileStr !== undefined && profileStr !== null) {
      this.isAuthenticated = true;
      this.authChanged();
      return JSON.parse(profileStr);
    }
    this.authChanged();
    this.isAuthenticated = false;
    return null;
  }

  clearProfile() {
    localStorage.removeItem('profile');
    this.isAuthenticated = false;
    this.authChanged();
  }

  authChanged() {
    this.comms.postMessage(
      this, '@all', {authChanged: ''}
    );
  }
}
