import { Component, OnInit } from '@angular/core';
import { Activos } from 'src/app/models/activos';
import { ActivosService } from 'src/app/services/activos.service';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
  styleUrls: ['./activos.component.css']
})
export class ActivosComponent implements OnInit{

  //creacion del objeto de tipo activos
  activo: Activos[] = [];

  constructor(private activosService:ActivosService ){

  }
  ngOnInit(): void {
    
    this.activosService.getActivos().subscribe(
      response => this.activo = response);
  }

  eliminarActivos(id:number){
    this.activosService.eliminarActivos(id).
    subscribe(response => {
      this.activo = this.activo.filter(activo => activo.id != id)
    });
  }
}
