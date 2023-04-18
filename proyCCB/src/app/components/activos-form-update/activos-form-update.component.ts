import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activos } from 'src/app/models/activos';
import { ActivosService } from 'src/app/services/activos.service';

@Component({
  selector: 'app-activos-form-update',
  templateUrl: './activos-form-update.component.html',
  styleUrls: ['./activos-form-update.component.css']
})
export class ActivosFormUpdateComponent implements OnInit{

  //creamos un objeto de tipo activos
  activo:Activos = new Activos();

  //pasamos como parametro el activoService de tipo activoService y activatedRoute de tipo ActivatedRoute
  //donde traeremos los servicios que estan alojados alli
  constructor(private activosService:ActivosService, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    //Actualziar
    this.activatedRoute.params.
    subscribe(params => {let id: number = params['id'];
    if(id){
      this.activosService.obtenerActivos(id).subscribe(response => this.activo = response);
    }
    })
  }

  //Se actualiza activos a partir de los datos que se crean desde el formulario
  // se envia un objeto de tipo activo para que el back se encargue
  actualizarActivo(){
    this.activosService.actualizarActivos(this.activo).
    subscribe(response => console.log("Actualizado"));
  }

}
