import { Component, OnInit } from '@angular/core';
import { Tarifas } from 'src/app/models/tarifas';
import { TarifasService } from 'src/app/services/tarifas.service';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit{

  tarifa: Tarifas[] = [];

  constructor(private tarifaService:TarifasService ){}

  ngOnInit(): void {
    this.tarifaService.getTarifas().subscribe(
      response => this.tarifa = response);
  }

}
