import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activos } from 'src/app/models/activos';
import { ActivosService } from 'src/app/services/activos.service';

@Component({
  selector: 'app-activos-form',
  templateUrl: './activos-form.component.html',
  styleUrls: ['./activos-form.component.css']
})
export class ActivosFormComponent implements OnInit{

  activo:Activos = new Activos();

  constructor(private activosService:ActivosService, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    //Actualizar
    this.activatedRoute.params.
    subscribe(params => {let id: number = params['id'];
    if(id){
      this.activosService.obtenerActivos(id).subscribe(response => this.activo = response);
    }
    })
  }

  crearActivos(){
    this.activosService.crearActivos(this.activo).
    subscribe(response => console.log("¡Exito!"));
  }

}
