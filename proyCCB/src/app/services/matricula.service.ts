import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matricula } from '../models/matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  url: String = 'http://localhost:8080/api/matricula';

  constructor(private http: HttpClient) { }

  getMatricula():Observable<Matricula[]>{
    return this.http.get<Matricula[]>(this.url+'/list-matricula');
  }

  crearMatricula(matricula:Matricula):Observable<Matricula>{
    return this.http.post<Matricula>(this.url+'/new', matricula);
  }

  obtenerMatricula(id: number):Observable<Matricula>{
    return this.http.get<Matricula>(this.url+'/'+id);
  }

  actualizarMatricula(matricula: Matricula):Observable<Matricula>{
    return this.http.put<Matricula>(this.url+'/update/'+matricula.id, matricula);
  }

  eliminarMatricula(id: number):Observable<any>{
    return this.http.delete<any>(this.url+'/delete/'+id);
  }
}
