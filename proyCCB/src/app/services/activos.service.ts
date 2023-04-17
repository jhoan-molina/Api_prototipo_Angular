import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activos } from '../models/activos';

@Injectable({
  providedIn: 'root'
})
export class ActivosService {

  url: String = 'http://localhost:8080/api/activos';

  constructor(private http: HttpClient) { }

  getActivos():Observable<Activos[]>{
    return this.http.get<Activos[]>(this.url+'/list-activos');
  }

  crearActivos(activos:Activos):Observable<Activos>{
    return this.http.post<Activos>(this.url+'/new', activos);
  }

  obtenerActivos(id: number):Observable<Activos>{
    return this.http.get<Activos>(this.url+'/'+id);
  }

  actualizarActivos(activos: Activos):Observable<Activos>{
    return this.http.put<Activos>(this.url+'/update/'+activos.id, activos);
  }

  eliminarActivos(id: number):Observable<any>{
    return this.http.delete<any>(this.url+'/delete/'+id);
  }
}
