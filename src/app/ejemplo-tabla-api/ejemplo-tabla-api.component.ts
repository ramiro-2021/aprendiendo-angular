import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './model/Cliente';

@Component({
  selector: 'app-ejemplo-tabla-api',
  templateUrl: './ejemplo-tabla-api.component.html',
  styleUrls: ['./ejemplo-tabla-api.component.css']
})
export class EjemploTablaApiComponent implements OnInit {

  constructor(
    private http : HttpClient
  ) { }

  url : string = "http://localhost:8989/mailsender/clientes/listado";

  columnas = ["Nombre","Apellido","Nro. DNI","Mail", "Obra Social", "Marca Particular"];
  
  indices = ["nombre","apellido","dni","mail", "obraSocial", "marcaParticular"]

  clientes : Cliente[] = [];
  
  ngOnInit(): void {

    this.getClientes().subscribe(
      (response) => {
        this.clientes = response;
      },
      (error) => {
        console.log(error);
      }
    );

  }


  getClientes(){
    return this.http.get<Cliente[]>(this.url);
  }


}
