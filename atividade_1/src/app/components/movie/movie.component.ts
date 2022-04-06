import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['../../../styles.scss']
})
export class MovieComponent implements OnInit {

  movies = [
    { id: 1, title: 'Homem Aranha: Longe de Casa', src: 'https://br.web.img2.acsta.net/pictures/19/07/05/17/30/5167951.jpg' },
    { id: 2, title: 'Doutor Estranho', src: 'https://br.web.img3.acsta.net/pictures/16/09/29/21/15/495786.jpg' },
    { id: 3, title: 'O auto da compadecida', src: 'https://upload.wikimedia.org/wikipedia/pt/b/bf/O_auto_da_compadecida.jpg' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
