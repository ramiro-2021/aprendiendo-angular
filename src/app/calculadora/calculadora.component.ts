import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  
  FormularioFormGroup:FormGroup

  resultado:number;

  mensajito: string;

  constructor(

    private _builder:FormBuilder,

  )  {  this.FormularioFormGroup= this._builder.group({

    NUMERO1:["", ],
        
    NUMERO2:["", ],
        
   operacion:["", ],

   resultado:[","]
        
      })}

  ngOnInit(): void {
  }

  
  calcular(JSON) {


    if (JSON.operacion == 'suma') {
      this.resultado = JSON.NUMERO1 + JSON.NUMERO2;
      this.mensajito="Aca se realizo una suma!"
    };
    if (JSON.operacion == 'resta') {
      this.resultado = JSON.NUMERO1 - JSON.NUMERO2;
      this.mensajito = "Esto es una resta!"
    };
    if (JSON.operacion == 'multiplicacion') {
      console.log(JSON.NUMERO1 * JSON.NUMERO2)
      this.resultado = JSON.NUMERO1 * JSON.NUMERO2;
      this.mensajito = "Esto es una multiplicacion!"
    };



    if (JSON.operacion == 'division' && JSON.NUMERO2 != '0') {
      console.log(JSON.NUMERO1 / JSON.NUMERO2);
      this.resultado = JSON.NUMERO1 / JSON.NUMERO2;
      this.mensajito = "Esto es una division!"
    }else if (JSON.operacion == 'division' && JSON.NUMERO2 == '0') {
     
      console.log("NO SE PUEDE DIVIDIR POR 0");
    
     

}
  }

}

