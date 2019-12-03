import { Injectable } from '@angular/core';
import { ProfileDataService } from './profile-data.service';
import { CommunicatorService } from './communicator.service';
import { LoggerService } from './logger.service';
import { UserProfile } from '../interfaces/user';
import { Profile } from '../interfaces/profile';

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
      this.refreshProfile();
  }

  setAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }

  hasRole(role: string) {
    return (this.roles.indexOf(role) > -1);
  }

  isBuyer() {
    return this.hasRole('buyer');
  }

  isSeller() {
    return this.hasRole('seller');
  }

  getAuthenticated() {
    return this.isAuthenticated;
  }

  setProfile(profile: Profile) {
    localStorage.setItem('profile', JSON.stringify(profile));
    this.authChanged();
    this.isAuthenticated = true;
  }

  refreshProfile() {
    const profileStr = localStorage.getItem('profile');
    if (profileStr !== undefined && profileStr !== null) {
      this.isAuthenticated = true;
      this.authChanged();
      try {
        this.profileData = JSON.parse(profileStr);
      } catch(err) {
        this.logger.log(err);
      }
      return this.profileData;
    }
    this.authChanged();
    this.isAuthenticated = false;
    return null;
  }

  refreshRoles() {
    try {
      this.roles = this.profileData.role.map(r => r.role);
    } catch (error) {
      this.logger.log(error);
    }
  }

  clearProfile() {
    localStorage.removeItem('profile');
    this.isAuthenticated = false;
    this.profileData = null;
    this.authChanged();
  }

  authChanged() {
    this.comms.postMessage(
      this, '@all', {authChanged: ''}
    );
  }

  getProfileData() {
    return this.profileData;
  }
}
