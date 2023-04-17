import { Component, OnInit } from '@angular/core';
import { Establecimiento } from 'src/app/models/establecimiento';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.css']
})
export class EstablecimientoComponent implements OnInit{

  establecimientos: Establecimiento[] = [];

  constructor(private establecimientoService:EstablecimientoService ){

  }
  ngOnInit(): void {
    this.establecimientoService.getEstablecimiento().subscribe(
      response => this.establecimientos = response);
  }

  eliminarPropietario(id:number){
    this.establecimientoService.eliminarEstablecimiento(id).
    subscribe(response => {
      this.establecimientos = this.establecimientos.filter(establecimiento => establecimiento.id != id)
    });
  }

}
