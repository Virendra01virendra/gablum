import { Injectable } from '@angular/core';
import { Stomp, CompatClient } from '@stomp/stompjs';
import * as sockjs from 'sockjs-client';
import { Bid } from '../interfaces/bid';
import { CommunicatorService } from './communicator.service';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: object;
  private stompClient: CompatClient;

  constructor(private comms: CommunicatorService) {
    this.socket = new sockjs('http://localhost:8080/api/auctions/ws');
    this.stompClient = Stomp.over(this.socket);
    this.stompClient.heartbeatIncoming = 2000;
    this.stompClient.heartbeatOutgoing = 2000;
  }

  connect() {
    this.stompClient.connect({}, connectMessage => {
    });
  }

  sendBid(bid: Bid) {
    if (!this.stompClient.connected) {
      throw new Error('connection not yet open');
    }

    this.stompClient.send('/bids.addbid', {}, JSON.stringify(bid));
  }

  subscribe(topic: string, dest: string, key: string) {
    if (!this.stompClient.connected) {
      throw new Error('connection not yet open');
    }
    this.stompClient.subscribe(topic, message => {
      this.comms.postMessage(this, dest, {[key]: message});
    });
    return this.comms.getMessages();
  }
}
