import { Component, OnInit } from '@angular/core';
import { Propietario } from 'src/app/models/propietario';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.css']
})
export class PropietarioComponent implements OnInit {

  propietarios: Propietario[] = [];
  ConfirmationService: any;

  constructor(private propietarioService: PropietarioService) {

  }
  ngOnInit(): void {
    this.propietarioService.getPropietario().subscribe(
      response => this.propietarios = response);
  }

  eliminarPropietario(id: number) {
    this.propietarioService.eliminarPropietario(id).
      subscribe(response => {
        this.propietarios = this.propietarios.filter(propietario => propietario.id != id)
      });
  }
}

