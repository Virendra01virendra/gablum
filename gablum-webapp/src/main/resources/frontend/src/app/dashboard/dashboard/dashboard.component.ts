import { Component, OnInit } from '@angular/core';
import { Stomp, CompatClient } from '@stomp/stompjs';
import * as sockjs from 'sockjs-client';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private socket: object;
  private stompClient: CompatClient;

  constructor() {
    this.socket = new sockjs('http://localhost:8080/ws');
    this.stompClient = Stomp.over(this.socket);
    console.log(this.stompClient);
    this.stompClient.connect({}, frame => {});
    console.log(this.stompClient);
  }

  ngOnInit() {
    // if (this.stompClient.connected)
  }

  send() {
    this.stompClient.send('/bids.addbid', {}, 'hello');
    this.stompClient.subscribe('/topic/newbid', msg => {
      console.log(msg);
      console.log(msg.body);
    });
  }

}
