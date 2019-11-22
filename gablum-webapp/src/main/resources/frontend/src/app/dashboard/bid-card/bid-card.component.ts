import { Component, OnInit, Input } from '@angular/core';
import { Bid } from 'src/app/interfaces/bid';
import { NewBid } from 'src/app/interfaces/newbid';

@Component({
  selector: 'app-bid-card',
  templateUrl: './bid-card.component.html',
  styleUrls: ['./bid-card.component.css']
})
export class BidCardComponent implements OnInit {

  @Input()bid: NewBid;

  constructor() {
    // if (!this.bid) {
    //   this.bid = {
    //     seller: 'A GLorious Seller',
    //     price: 100,
    //     unitPrice: 12.5,
    //     rank: 2,
    //     scores: {
    //       one: 4,
    //       two: 7,
    //       three: 6
    //     },
    //     totalScore: 17,
    //     profileUrl: 'https://picsum.photos/400/400'
    //   };
    // }
  }

  ngOnInit() {
  }

}
