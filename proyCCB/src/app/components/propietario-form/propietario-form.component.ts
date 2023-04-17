import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Propietario } from 'src/app/models/propietario';
import { TipoId } from 'src/app/models/tipo-id';
import { TipoPersona } from 'src/app/models/tipo-persona';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-propietario-form',
  templateUrl: './propietario-form.component.html',
  styleUrls: ['./propietario-form.component.css']
})
export class PropietarioFormComponent implements OnInit{

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
    //Actualizar
    this.activatedRoute.params.
    subscribe(params => {let id: number = params['id'];
    if(id){
      this.propietarioService.obtenerPropietario(id).subscribe(response => this.propietario = response);
    }
    })
  }

  crearPropietario(){
    this.propietarioService.crearPropietario(this.propietario).
    subscribe(response => console.log("¡Exito!"));
  }

  

  

}
