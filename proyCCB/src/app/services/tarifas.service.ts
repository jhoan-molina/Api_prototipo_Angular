import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarifas } from '../models/tarifas';

@Injectable({
  providedIn: 'root'
})
export class TarifasService {

  url: String = 'http://localhost:8080/api/tarifas';

  constructor(private http: HttpClient) { }

  getTarifas():Observable<Tarifas[]>{
    return this.http.get<Tarifas[]>(this.url+'/list-tarifas');
  }
}
