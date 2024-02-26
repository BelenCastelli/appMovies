import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private url: string
  private urlActor: string
  private urlDirector: string
  private urlGuionista:string
  private urlProductora: string

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:3000/peliculas"
    this.urlActor = "http://localhost:3000/pelicula/actor"
    this.urlDirector = "http://localhost:3000/pelicula/director"
    this.urlGuionista = "http://localhost:3000/pelicula/guionista"
    this.urlProductora = "http://localhost:3000/pelicula/productora"
  }

  public getMovies(): Observable<object>{
    console.log(this.http.get(this.url));
    
    return this.http.get(this.url)
  }
}



