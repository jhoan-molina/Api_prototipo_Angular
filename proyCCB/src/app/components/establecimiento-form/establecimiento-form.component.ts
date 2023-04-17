import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadEconomica } from 'src/app/models/actividad-economica';
import { Activos } from 'src/app/models/activos';
import { Establecimiento } from 'src/app/models/establecimiento';
import { Matricula } from 'src/app/models/matricula';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';

@Component({
  selector: 'app-establecimiento-form',
  templateUrl: './establecimiento-form.component.html',
  styleUrls: ['./establecimiento-form.component.css']
})
export class EstablecimientoFormComponent implements OnInit{

  establecimientos:Establecimiento = new Establecimiento();

  actividad_economicas:ActividadEconomica[] = [];

  activo:Activos[] = [];

  matriculas:Matricula[] = [];

  constructor(private establecimientoService:EstablecimientoService, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    
    this.establecimientoService.getActividadEconomica().
    subscribe(response => this.actividad_economicas = response);

    this.establecimientoService.getActivos().
    subscribe(response => this.activo = response);

    this.establecimientoService.getMatricula().
    subscribe(response => this.matriculas = response);
    //Actualizar
    this.activatedRoute.params.
    subscribe(params => {let id: number = params['id'];
    if(id){
      this.establecimientoService.obtenerEstablecimiento(id).subscribe(response => this.establecimientos = response);
    }
    })
  }

  crearPropietario(){
    this.establecimientoService.crearEstablecimiento(this.establecimientos).
    subscribe(response => console.log("¡Exito!"));
  }

}
