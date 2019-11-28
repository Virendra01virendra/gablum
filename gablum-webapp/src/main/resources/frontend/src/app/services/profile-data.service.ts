import { Injectable } from '@angular/core';
import { CommunicatorService } from './communicator.service';
import { NetworkingService } from './networking.service';
import { Profile } from '../interfaces/profile';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  public profileUrl: string;

  constructor(
    private comms: CommunicatorService,
    private networking: NetworkingService
  ) {
    this.profileUrl = environment.profileUrl;
  }

  getUserProfileByEmail(dest, key) {
    this.networking.getData<Profile>(this.profileUrl, dest, key);
  }

  editUserProfile(dest, data, key) {
    this.networking.patchData<Profile>(this.profileUrl, dest, data, key);
  }
}
