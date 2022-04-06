import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems = [
    { name: "Home", url: "/" },
    { name: "Movies", url: "/movies" },
    { name: "Series", url: "/series" },
    { name: "Contacts", url: "/contacts" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
