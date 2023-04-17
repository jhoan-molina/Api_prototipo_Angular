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

  constructor (public eventService : EventService, public emailService: EmailService, private router: Router) {
    this.event = new Event({});
    this.showEnd = false;

    this.event.start = new Date();
    this.event.end = new Date();
  }

  ngOnInit() {
  }

  addEvent(){
    
    console.log(this.event)
    this.eventService.addEvent(this.event);
  }

  sendEmail(){
    /*if(!this.showEnd){
      this.event.end = null;
    }*/
    this.emailService.sendEmail(this.email.email, this.event.title).subscribe(response => console.log("¡Exito!"));
    console.log(this.email, this.event);
  }

  goBack(){
    this.addEvent();
    this.sendEmail();
    this.router.navigate(['/calendar']);
  }

}


