import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public static messageKey = 'DashboardComponent';

  constructor(private ws: WebsocketService) { }

  ngOnInit() {
    this.ws.connect();
  }

  send() {
    this.ws.sendBid({price: 100});
  }

  subscribe() {
    this.ws.subscribe(
      '/topic/newbid',
      DashboardComponent.messageKey,
      'newbid').subscribe(message => {
        if (message.dest === '@all' || message.dest === DashboardComponent.messageKey) {
          const data = message.data;
          if ('newbid' in data) {
            console.log(data.newbid);
          }
        }
      });
  }

}
