import { Component, OnInit } from '@angular/core';
import { NavLink } from 'src/app/interfaces/navlink';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  public navDetail: NavLink = {
    title: 'Home',
    icon: 'home'
  };

  constructor() { }

  ngOnInit() {
  }

  // setLink(navLink: NavLink) {
  //   this.navDetail = navLink;
  // }

}
