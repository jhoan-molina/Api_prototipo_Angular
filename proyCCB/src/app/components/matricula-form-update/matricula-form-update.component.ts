import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Matricula } from 'src/app/models/matricula';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'app-matricula-form-update',
  templateUrl: './matricula-form-update.component.html',
  styleUrls: ['./matricula-form-update.component.css']
})
export class MatriculaFormUpdateComponent implements OnInit{

  matricula:Matricula = new Matricula();

  constructor(private matriculaService:MatriculaService, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {

    this.activatedRoute.params.
    subscribe(params => {let id: number = params['id'];
    if(id){
      this.matriculaService.obtenerMatricula(id).subscribe(response => this.matricula = response);
    }
    })
  }


  actualizarMatricula(){
    this.matriculaService.actualizarMatricula(this.matricula).
    subscribe(response => console.log("Actualizado"));
  }

}
