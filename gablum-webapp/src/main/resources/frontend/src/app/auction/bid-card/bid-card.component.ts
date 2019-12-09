import { Component, OnInit, Input } from '@angular/core';
import { NewBid } from 'src/app/interfaces/newbid';
import { MatChipsModule } from '@angular/material/chips';


@Component({
  selector: 'app-bid-card',
  templateUrl: './bid-card.component.html',
  styleUrls: ['./bid-card.component.css']
})
export class BidCardComponent implements OnInit {

  constructor() {

  }

  @Input() public bidDataEntity: NewBid;


  ngOnInit() {
  }

  selectBid(){
    
  }

}
