import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicProfileService {
  public profileEmail: string;
  public previousRoute: string;
  public nextRoute: string;
  constructor() { }
}
