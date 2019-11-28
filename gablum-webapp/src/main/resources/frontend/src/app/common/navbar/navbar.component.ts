import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLoggedIn = false;

  @Output() public menuToggled = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  menuClicked(event) {
    this.menuToggled.emit(event);
  }

}
