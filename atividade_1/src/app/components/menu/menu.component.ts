import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems = [
    { name: "Home", url: "/" },
    { name: "Movie", url: "/movies" },
    { name: "Serie", url: "/series" },
    { name: "Contact", url: "/contacts" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
