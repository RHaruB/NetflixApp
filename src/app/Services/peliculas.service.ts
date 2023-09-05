import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse } from '../Interfaces/response';
import { Observable } from 'rxjs';
import { IGeneros } from '../Interfaces/generos';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  urlBase= 'https://localhost:7106/api/'
  controladorPersona = 'Netflix/'
  constructor(private http: HttpClient) { }
  
  
  setGenero(descripcionR:IGeneros): Observable<IResponse>{
    console.log(descripcionR.toString())
    let params = new HttpParams()
    .append("descripcion", descripcionR.toString())
    let header = new HttpHeaders()
    .set('Type-content','aplication/json');
    const descripcion = descripcionR;

    return this.http.post<IResponse>(this.urlBase+this.controladorPersona+'RegistroGeneros',descripcionR);
  }
}
