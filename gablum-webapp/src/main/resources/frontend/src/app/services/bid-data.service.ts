import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BidDataService {

  constructor(
    private networking: NetworkingService
  ) { }
}
