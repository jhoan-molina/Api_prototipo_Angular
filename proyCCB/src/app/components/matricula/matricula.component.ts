import { Component, OnInit } from '@angular/core';
import { Matricula } from 'src/app/models/matricula';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit{

  matriculas: Matricula[] = [];

  constructor(private matriculaService:MatriculaService ){

  }
  ngOnInit(): void {
    this.matriculaService.getMatricula().subscribe(
      response => this.matriculas = response);
  }

  eliminarMatricula(id:number){
    this.matriculaService.eliminarMatricula(id).
    subscribe(response => {
      this.matriculas = this.matriculas.filter(matricula => matricula.id != id)
    });
  }
}
