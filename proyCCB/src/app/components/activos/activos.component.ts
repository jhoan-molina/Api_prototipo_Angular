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

  //se envia como parametro un objeto de tipo servicio para poder acceder a su contenido
  constructor(private activosService:ActivosService ){

  }

  //se llama al metodo de servicios que trae la información, se hace necesario
  //enviar un array de tipo activos para almacenar lo datos traidos
  ngOnInit(): void {
    
    this.activosService.getActivos().subscribe(
      response => this.activo = response);
  }

  //llama al metodo de servicio que elimina un dato en especifico,
  //se hace necesario enviar el id del activo, para saber que elemento
  // es eliminado
  eliminarActivos(id:number){
    this.activosService.eliminarActivos(id).
    subscribe(response => {
      this.activo = this.activo.filter(activo => activo.id != id)
    });
  }
}
