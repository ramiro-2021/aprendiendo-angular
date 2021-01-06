import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva-calculadora',
  templateUrl: './nueva-calculadora.component.html',
  styleUrls: ['./nueva-calculadora.component.css']
})
export class NuevaCalculadoraComponent implements OnInit {
title='operacionesmat';

cantidadone=0;
cantidadtwo=0;
resultado=0;

multiplication(){
let res= this.resultado= (this.cantidadone * this.cantidadtwo);
console.log(res);
}
  constructor() { }

  ngOnInit(): void {
  }

}
