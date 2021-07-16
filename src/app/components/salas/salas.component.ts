import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../../services/sucursal.service';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  salas:any = [];

  constructor(
    private sucursalService: SucursalService
  ) { }

  ngOnInit(): void {
    this.getSalas();
  }

  getSalas(){
    this.sucursalService.getAllSalas()
      .subscribe(salas => {
        this.salas = salas;
        console.log(salas);
      })
  }

}
