import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Respuesta } from 'src/app/models/respuesta';
import { PeliculasService } from 'src/app/shared/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  movies: Movie[]
constructor(public peliculasService: PeliculasService)
{}

getMovies(){
  this.peliculasService.getMovies().subscribe((res: Respuesta) => {
    if((!res.error))
    this.movies = res.data
    console.log(this.movies);
  })
}

ngOnInit(): void {
  this.getMovies()
  
}

}
