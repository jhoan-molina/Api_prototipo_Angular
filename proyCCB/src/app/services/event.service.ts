import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private afd: AngularFireDatabase) { }

  addEvent(evento: Event){

    let eventRef = this.afd.database.ref('eventos');

    let newEvent = eventRef.push();

    evento.id = newEvent.key!;

    let eventRefId = this.afd.database.ref('eventos/'+evento.id);

    console.log('lista'+ eventRef.get.toString)

    console.log(evento.getData());
    eventRefId.set(evento.getData());

  }

  getEvents(): Observable<Event[]>{
    console.log(this.afd.list<Event>('eventos').valueChanges());
    return this.afd.list<Event>('eventos').valueChanges();
  }
}
