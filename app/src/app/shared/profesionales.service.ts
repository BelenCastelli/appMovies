import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professional } from '../models/professional';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalesService {
  private url: string
  constructor(private http: HttpClient) {
    this.url = "http://localhost:3000/profesionales"
   }

  public getProfesionales():Observable<object>{
  return this.http.get(this.url)
  }

  public getProfesional(name:string, lastName:string): Observable<object>{
    return this.http.get(this.url +'/' + name + '/' + lastName )
  }

  public postProfesional(profesional:Professional):Observable<object>{
    return this.http.post(this.url, profesional)
  }

  public putProfesional(profesional:Object):Observable<object>{

    console.log(profesional);
    
    return this.http.put<object>(this.url, profesional)
  }

  public deleteProfesional(name:string, lastName:string):Observable<object>{
    const body = { name: name, lastName: lastName };
    return this.http.delete(this.url, {body:body})
  }

}
