import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es'

@Component({
  selector: 'app-next-events',
  templateUrl: './next-events.component.html',
  styleUrls: ['./next-events.component.css']
})
export class NextEventsComponent implements OnInit{

  @Input() events:any;

  constructor () {
    
  }

  ngOnInit(){
  }

  calendarOptions: CalendarOptions = {
    plugins: [listPlugin,interactionPlugin],
    locale: esLocale,
    initialDate: new Date(),
    initialView: 'list',
    headerToolbar: {
      center: 'Proximos Eventos'
    },
    editable: false

  };
}
