import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from '../../../models/event.model';
import { Router } from '@angular/router';
import { Email } from 'src/app/models/email';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit{

  public event: Event;
  public showEnd: boolean;
  public email: Email = new Email();

  //Agregamos como parametro al constructor, tanto un obj de eventos como uno de email
  constructor (public eventService : EventService, public emailService: EmailService, private router: Router) {
    this.event = new Event({});
    this.showEnd = false;

    this.event.start = new Date();
    this.event.end = new Date();
  }

  ngOnInit() {
  }

  //Se agrega una duncion que no retorna nada, aqui es donde se agrega el evento al calendario
  addEvent(){
    
    console.log(this.event)
    //Hace acceso al servicio de agregar eventos, donde se hace carga a la lista 
    // del firebase, por esto se envia un objeto de tipo evento
    this.eventService.addEvent(this.event);
  }

  //Trae del input de correo el email y lo asigna al objeto, junto a la descripción del evento
  //esto se envia como parametro cuando es llamado el servicio de mensajeria 
  sendEmail(){
    this.emailService.sendEmail(this.email.email, this.event.title).subscribe(response => console.log("¡Exito!"));
    console.log(this.email, this.event);
  }
  //Funcion que agrega el evento al calendario y envia el correo al participante
  goBack(){
    this.addEvent();
    this.sendEmail();
    this.router.navigate(['/calendar']);
  }

}


