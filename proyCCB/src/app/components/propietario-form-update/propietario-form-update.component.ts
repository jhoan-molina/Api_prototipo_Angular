import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Propietario } from 'src/app/models/propietario';
import { TipoId } from 'src/app/models/tipo-id';
import { TipoPersona } from 'src/app/models/tipo-persona';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-propietario-form-update',
  templateUrl: './propietario-form-update.component.html',
  styleUrls: ['./propietario-form-update.component.css']
})
export class PropietarioFormUpdateComponent implements OnInit{

  propietario:Propietario = new Propietario();

  tipos_id:TipoId[] = [];

  tipos_persona:TipoPersona[] = [];

  constructor(private propietarioService:PropietarioService, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.propietarioService.getTipoId().
    subscribe(response => this.tipos_id = response);

    this.propietarioService.getTipoPersona().
    subscribe(response => this.tipos_persona = response);

    this.activatedRoute.params.
    subscribe(params => {let id: number = params['id'];
    if(id){
      this.propietarioService.obtenerPropietario(id).subscribe(response => this.propietario = response);
    }
    })
  }


  actualizarPropietario(){
    this.propietarioService.actualizarPropietario(this.propietario).
    subscribe(response => console.log("Actualizado"));
  }

  compararTipoId (o1:TipoId, o2:TipoId):boolean{
    if(o1 === undefined && o2=== undefined) return true;
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false: o1.id == o2.id;
  }

  compararTipoPersonas (o1:TipoPersona, o2:TipoPersona):boolean{
    if(o1 === undefined && o2=== undefined) return true;
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false: o1.id == o2.id;
  }
}
