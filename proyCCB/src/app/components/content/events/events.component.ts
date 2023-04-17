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

  public events!: Event[];

  constructor(private eventService : EventService) {
    this.eventService.getEvents().subscribe(events => {
      this.events = events
    })
    
  }

  ngOnInit() {

  }

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
