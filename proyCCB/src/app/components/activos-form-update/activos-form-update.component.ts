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

  activo:Activos = new Activos();

  constructor(private activosService:ActivosService, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {

    this.activatedRoute.params.
    subscribe(params => {let id: number = params['id'];
    if(id){
      this.activosService.obtenerActivos(id).subscribe(response => this.activo = response);
    }
    })
  }


  actualizarActivo(){
    this.activosService.actualizarActivos(this.activo).
    subscribe(response => console.log("Actualizado"));
  }

}
