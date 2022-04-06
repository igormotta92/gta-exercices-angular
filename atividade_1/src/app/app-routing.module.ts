import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { SerieComponent } from './components/serie/serie.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "movies", component: MovieComponent },
  { path: "series", component: SerieComponent },
  { path: "contacts", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
