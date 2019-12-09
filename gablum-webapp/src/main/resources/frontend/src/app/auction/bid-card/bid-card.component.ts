import { Component, OnInit, Input } from '@angular/core';
import { NewBid } from 'src/app/interfaces/newbid';
import { MatChipsModule } from '@angular/material/chips';
import { NgxData } from 'src/app/interfaces/ngx-data';


@Component({
  selector: 'app-bid-card',
  templateUrl: './bid-card.component.html',
  styleUrls: ['./bid-card.component.css']
})
export class BidCardComponent implements OnInit {

  constructor() {

  }

  @Input() public bidDataEntity: NewBid;

  public data: NgxData[];


  ngOnInit() {
    this.data = Object.keys(this.bidDataEntity.score).map(key => {
      // if (key !== 'total') {
        return {name: key, value: this.bidDataEntity.score[key]};
      // }
    }).filter(item => item.name !== 'total');
  }

}
