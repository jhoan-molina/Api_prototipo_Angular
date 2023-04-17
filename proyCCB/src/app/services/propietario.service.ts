import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Credentials, Propietario } from '../models/propietario';
import { TipoId } from '../models/tipo-id';
import { TipoPersona } from '../models/tipo-persona';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  url: String = 'http://localhost:8080/api/propietario';

  constructor(private http: HttpClient) { }

  getPropietario():Observable<Propietario[]>{
    return this.http.get<Propietario[]>(this.url+'/list');
  }

  getTipoId():Observable<TipoId[]>{
    return this.http.get<TipoId[]>(this.url+'/tipo_id');
  }

  getTipoPersona():Observable<TipoPersona[]>{
    return this.http.get<TipoPersona[]>(this.url+'/tipo_persona');
  }

  crearPropietario(propietario:Propietario):Observable<Propietario>{
    return this.http.post<Propietario>(this.url+'/new', propietario);
  }

  obtenerPropietario(id: number):Observable<Propietario>{
    return this.http.get<Propietario>(this.url+'/'+id);
  }

  actualizarPropietario(propietario: Propietario):Observable<Propietario>{
    return this.http.put<Propietario>(this.url+'/update/'+propietario.id, propietario);
  }

  eliminarPropietario(id: number):Observable<any>{
    return this.http.delete<any>(this.url+'/delete/'+id);
  }

  Login(creds: Credentials){
    return this.http.post('http://localhost:8080/login', creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>)=>{
      const body = response.body;
      const headers = response.headers;
      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ', '');
      
      localStorage.setItem('token', token);

      return body;
    }))
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
