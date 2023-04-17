import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Matricula } from 'src/app/models/matricula';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'app-matricula-form',
  templateUrl: './matricula-form.component.html',
  styleUrls: ['./matricula-form.component.css']
})
export class MatriculaFormComponent implements OnInit{

  matricula:Matricula = new Matricula();

  constructor(private matriculaService:MatriculaService, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    //Actualizar
    this.activatedRoute.params.
    subscribe(params => {let id: number = params['id'];
    if(id){
      this.matriculaService.obtenerMatricula(id).subscribe(response => this.matricula = response);
    }
    })
  }

  crearMatricula(){
    this.matriculaService.crearMatricula(this.matricula).
    subscribe(response => console.log("¡Exito!"));
  }

}
