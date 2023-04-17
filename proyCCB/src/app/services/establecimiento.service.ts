import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActividadEconomica } from '../models/actividad-economica';
import { Activos } from '../models/activos';
import { Establecimiento } from '../models/establecimiento';
import { Matricula } from '../models/matricula';

@Injectable({
  providedIn: 'root'
})
export class EstablecimientoService {

  url: String = 'http://localhost:8080/api/establecimiento';

  constructor(private http: HttpClient) { }

  getEstablecimiento():Observable<Establecimiento[]>{
    return this.http.get<Establecimiento[]>(this.url+'/list-establecimiento');
  }

  getActividadEconomica():Observable<ActividadEconomica[]>{
    return this.http.get<ActividadEconomica[]>(this.url+'/actividad_economica');
  }

  getActivos():Observable<Activos[]>{
    return this.http.get<Activos[]>(this.url+'/activos');
  }
  
  getMatricula():Observable<Matricula[]>{
    return this.http.get<Matricula[]>(this.url+'/matricula');
  }

  crearEstablecimiento(establecimiento:Establecimiento):Observable<Establecimiento>{
    return this.http.post<Establecimiento>(this.url+'/new', establecimiento);
  }

  obtenerEstablecimiento(id: number):Observable<Establecimiento>{
    return this.http.get<Establecimiento>(this.url+'/'+ id);
  }

  actualizarEstablecimiento(establecimiento: Establecimiento):Observable<Establecimiento>{
    return this.http.put<Establecimiento>(this.url+'/update/'+establecimiento.id, establecimiento);
  }

  eliminarEstablecimiento(id: number):Observable<any>{
    return this.http.delete<any>(this.url+'/delete/'+id);
  }
  
}
