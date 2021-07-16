import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SucursalService } from '../../services/sucursal.service';

@Component({
  selector: 'app-salascreate',
  templateUrl: './salascreate.component.html',
  styleUrls: ['./salascreate.component.css']
})
export class SalascreateComponent implements OnInit {

  form: FormGroup;
  formCampana: FormGroup;
  valor: any = [];
  productsJson: any = [];
  sucursales:any = [];

  tipoSala = [
    {
      id: 1,
      nombre: '2D'
    },
    {
      id: 2,
      nombre: '3D'
    },
    {
      id: 3,
      nombre: 'Dynamix'
    }
  ];

  cantidads = [0,1,3,4,5,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  sillas = [0,1,3,4,5,6,1,1,1,1];

  tipoHospedajes = [
    {
      id: 1,
      nombre: 'Hilton'
    },
    {
      id: 2,
      nombre: 'Dann Carlton'
    }
  ];

  tipoEspectaculos = [
    {
      id: 1,
      nombre: 'Deportivo'
    },
    {
      id: 2,
      nombre: 'Deportivo al aire libre'
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private sucursalService: SucursalService
  ) {
    this.buildForm();
    //this.buildFormCampana();
   }

  ngOnInit(): void {
    this.getSucursales();
  }

  getSucursales(){
    this.sucursalService.getAllSucursales()
      .subscribe(sucursales => {
        this.sucursales = sucursales;
        console.log(sucursales);
      })
  }

  saveProduct(event: Event){
    event.preventDefault();

    this.productsJson = this.form.value;
    this.productsJson.estado = 1;
    this.productsJson.usuarioRegistro=1;
    console.log(this.productsJson);
    const valor2 = JSON.stringify(this.productsJson);
    console.log(valor2);

    if (this.form.valid){
      this.sucursalService.createSala(this.productsJson).subscribe(products => {
        this.valor = products;
        this.router.navigate(['./products']);
      });
    }
    else{
      console.log('no');
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      idSucursal: ['', [Validators.required]],
      idTipoSala: [''],
      estado: [''],
      usuarioRegistro: [''],
      nfila: [''],
      nsilla: ['']
    });
  }

  

}
