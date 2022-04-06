import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  plans: any = [
    { id: 1, pacote: 'simple', price: 10 },
    { id: 2, pacote: 'custom', price: 15 },
    { id: 3, pacote: 'combo', price: 20 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
