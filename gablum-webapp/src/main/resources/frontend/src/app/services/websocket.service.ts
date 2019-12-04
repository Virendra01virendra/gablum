import { Injectable } from '@angular/core';
import { Stomp, CompatClient, StompHeaders } from '@stomp/stompjs';
import * as sockjs from 'sockjs-client';
import { Bid } from '../interfaces/bid';
import { CommunicatorService } from './communicator.service';
import { environment } from 'src/environments/environment';
import { LoggerService } from './logger.service';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: any;
  private stompClient: CompatClient;

  private stompHeaders: StompHeaders;

  private storedSubcriptions = connectMessage => {};

  private socketReconnect = (isReconnect = true) => {
    this.socket = new sockjs(environment.wsURL);
    this.stompClient = Stomp.over(this.socket);
    this.stompClient.debug = msg => this.logger.log(msg);
    this.stompClient.heartbeatIncoming = 1000;
    this.stompClient.heartbeatOutgoing = 2000;
    this.stompClient.onWebSocketClose = () => {
      this.logger.log('rip');
      setTimeout(this.socketReconnect, 10000);
    };
    if (isReconnect) {
      this.stompClient.connect({}, this.storedSubcriptions);
    }
  }

  constructor(
    private comms: CommunicatorService,
    private logger: LoggerService) {
    this.stompHeaders = {
      auth: 'hello'
    };
    this.socketReconnect(false);
  }

  connect(connectCb = connectMessage => { console.log(connectMessage); }) {
    this.storedSubcriptions = connectCb;
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

  fetchBids() {
    if (!this.stompClient.connected) {
      throw new Error('connection not yet open');
    }

    this.stompClient.send('/bids.fetchbid', {}, 'fetch');
  }

  subscribe(topic: string, dest: string, key: string) {
    if (!this.stompClient.connected) {
      throw new Error('connection not yet open');
    }
    this.stompClient.subscribe(topic, message => {
      this.comms.postMessage(this, dest, {[key]: message});
    },
    this.stompHeaders);
    return this.comms.getMessages();
  }
}
