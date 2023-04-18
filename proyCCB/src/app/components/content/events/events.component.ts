import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es'
import { EventService } from '../../../services/event.service';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  //creamos un objeto de tipo event
  public events!: Event[];

  //pasamos como parametro el eventService de tipo eventService
  //donde mostraremos los eventos
  constructor(private eventService : EventService) {
    this.eventService.getEvents().subscribe(events => {
      this.events = events
    })
    
  }

  ngOnInit() {

  }
  //Opciones de la cual hace uso el calendario para poder visualizar algunos botones
  calendarOptionsMonth: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin,interactionPlugin],
    locale: esLocale,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: false,
    selectable: true,
    selectMirror: false,
    dayMaxEvents: false

  };

  //Opciones de la cual hace uso el cuadro de eventos 
  calendarOptionsList: CalendarOptions = {
    initialView: 'listWeek',
    plugins: [dayGridPlugin, listPlugin, interactionPlugin],
    locale: esLocale,
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: ''
    }
  };

}
