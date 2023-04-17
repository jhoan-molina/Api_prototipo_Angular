import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  url: String = 'http://localhost:8080/api/mail';

  constructor(private http: HttpClient) { }

  sendEmail(email: String, subject:String):Observable<any>{
    console.log('Entro '+ `${this.url}/EmailTo?email=${email}&subject=${subject}`);
    return this.http.get<any>(`${this.url}/EmailTo?email=${email}&subject=${subject}`);
  }
}
