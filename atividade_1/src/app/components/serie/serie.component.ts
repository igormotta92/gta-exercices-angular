import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  series = [
    { id: 1, title: 'La casa de papel', src: 'https://musicnonstop.uol.com.br/wp-content/uploads/2021/08/PT-BR_LCDP_S5_Main_Vertical_RGB_PRE.jpg' },
    { id: 2, title: 'Stranger Things', src: 'https://fever.imgix.net/plan/photo/cf44c2fc-d83e-11eb-9522-06551cb39bc6.jpg?auto=compress&auto=format&fm=jpg&w=720&h=720' },
    { id: 3, title: 'Bridgerton', src: 'https://img.estadao.com.br/thumbs/640/resources/jpg/8/0/1646250587808.jpg' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
