import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/propietario';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds: Credentials = {
    email: "",
    password: ""
  };
  
  constructor(private propietarioServicio: PropietarioService, private router: Router){

  }

  login(form: NgForm){
    console.log('form value', form.value);
    this.propietarioServicio.Login(this.creds).subscribe(response =>{
      this.router.navigate(['/']);
    })
  }
}
