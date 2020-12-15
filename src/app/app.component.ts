import { Component } from '@angular/core';
alert("holaaaaaa")
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendiendo-angular';
}
"use strict"
//PROGRAMA QUE PIDA DOS NUMEROS Y QUE NOS DIGA CUAL ES EL MAYOR, EL MENOR Y SI SON IGUALES

var numero1 =parseInt(prompt("introduce el primer numero","0"));

var numero2=parseInt(prompt("introduce el segundo numero","0"));


//plus

while(numero1<=0||numero2<=0||isNaN(numero1)||isNaN(numero2)){
numero1=parseInt(prompt("introduce el primer numero" ,"0"));
numero2=parseInt(prompt("introduce el segundo numero" ,"0"));
}
//console.log(numero1, numero2);

if (numero1==numero2) {
	alert("los numeros son iguales");
} else if (numero1>numero2){
alert("el numero mayor es "+numero1);
alert("el numero menor es "+numero2);
}else if (numero2>numero1)
{alert("el numero mayor es "+numero2);
alert("el numero menor es "+numero1);}
else{
	alert("introduce numeros correctos");
}
function listadoFrutas(fruta1,fruta2,...Resto_de_Frutas){
	console.log("Fruta 1: ", fruta1);
	console.log("Fruta 2: ", fruta2);
	console.log(Resto_de_Frutas);

}
