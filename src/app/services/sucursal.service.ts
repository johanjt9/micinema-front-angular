import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  constructor(
    private http: HttpClient
  ) { }

  getAllSalas(){
    return this.http.get(`http://localhost:9090/salas`);
  }

  getAllSucursales(){
    return this.http.get(`http://localhost:9090/sucursales`);
  }

  createSala(product){
    return this.http.post(`http://localhost:9090/salas`, product);
  }


}
