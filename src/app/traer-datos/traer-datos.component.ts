import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import {Tabla} from './model/Tabla';

@Component({
  selector: 'app-traer-datos',
  templateUrl: './traer-datos.component.html',
  styleUrls: ['./traer-datos.component.css']
})
export class TraerDatosComponent implements OnInit {

  constructor(
  
    private http: HttpClient
  ) { }
      url: string='http://192.168.0.11:8989/mailsender/clientes/listado';

      muchosTitulos = ["Nombre","Apellido","Nro. DNI","Mail", "Obra Social", "Marca Particular"];

      indices = ["nombre","apellido","dni","mail", "obraSocial", "marcaParticular"]

   clientes : Tabla[] = [];

   ngOnInit(): void { 


        this.getClientes().subscribe(
          (response) => {
            this.clientes=response;
            console.log("Datos recuperados: ");
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
   }
        getClientes(){
          return this.http.get<Tabla[]>(this.url);
        }
  
}


