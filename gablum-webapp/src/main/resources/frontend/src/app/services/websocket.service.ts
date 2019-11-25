import { Injectable } from '@angular/core';
import { Stomp, CompatClient } from '@stomp/stompjs';
import * as sockjs from 'sockjs-client';
import { Bid } from '../interfaces/bid';
import { CommunicatorService } from './communicator.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: object;
  private stompClient: CompatClient;

  constructor(private comms: CommunicatorService) {
    this.socket = new sockjs(environment.wsURL);
    this.stompClient = Stomp.over(this.socket);
    this.stompClient.heartbeatIncoming = 1000;
    this.stompClient.heartbeatOutgoing = 2000;
  }

  connect(connectCb = connectMessage => { console.log(connectMessage); }) {
    this.stompClient.connect({}, connectCb);
  }

  sendBid(bid: Bid) {
    if (!this.stompClient.connected) {
      throw new Error('connection not yet open');
    }

    this.stompClient.send('/bids.addbid', {}, JSON.stringify(bid));
  }

  getBidScore(bid: Bid) {
    if (!this.stompClient.connected) {
      throw new Error('connection not yet open');
    }

    this.stompClient.send('/bids.getscore', {}, JSON.stringify(bid));
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
