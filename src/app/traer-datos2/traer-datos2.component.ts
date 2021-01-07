import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteBuscado } from './model/nombre-buscador';

@Component({
  selector: 'app-traer-datos2',
  templateUrl: './traer-datos2.component.html',
  styleUrls: ['./traer-datos2.component.css']
})
export class TraerDatos2Component implements OnInit {

  nombreBuscador: string = "";

  url: string = 'http://192.168.0.11:8989/mailsender/clientes/';

  muchosTitulos = ["Nombre", "Apellido", "Nro. DNI", "Mail", "Obra Social", "Marca Particular"];

  indices = ["nombre", "apellido", "dni", "mail", "obraSocial", "marcaParticular"]

  clientes: ClienteBuscado[] = [];


  constructor(

    private http: HttpClient

  ) { }
  ngOnInit(): void {}


  getClientes() {
    return this.http.get<ClienteBuscado[]>(this.url+ this.nombreBuscador);
  }

  tipear(evento) {
    this.nombreBuscador = evento.target.value;

    this.getClientes().subscribe(
      (response) => {
        this.clientes = response;

        console.log("Datos recuperados por medio del nombre: ");
        console.log(response);

      },
      (error) => {
        console.log(error);
        this.clientes =[];
      }
    );
  }
 

  
}



