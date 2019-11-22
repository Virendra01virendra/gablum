import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { WebsocketService } from 'src/app/services/websocket.service';
import { NewBid } from 'src/app/interfaces/newbid';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public static messageKey = 'DashboardComponent';

  public bids: NewBid[] = [];
  public testBid: NewBid = {
    seller: {
      name: 'A glorious seller',
      company: 'Company ye',
      rating: 4.4,
      username: 'aGloriousSeller',
      profileUrl: ''
    },
    price: 100,
    unitPrice: 12.5,
    rank: 2,
    scores: [
      {
        scoreIdentifier: 'abc',
        scoreName: 'def',
        scoreCalculated: 0,
        scoreWeight: 0,
        scoreRawValue: 6
      }
    ],
    totalScore: 17,
  };

  constructor(private ws: WebsocketService) { }

  ngOnInit() {
    this.ws.connect(message => this.subscribe());
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
            this.bids.push(this.testBid);
          }
        }
      });
  }

}
