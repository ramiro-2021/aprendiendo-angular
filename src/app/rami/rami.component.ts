import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { allowedNodeEnvironmentFlags } from 'process';
import { __values } from 'tslib';

@Component({
  selector: 'app-rami',
  templateUrl: './rami.component.html',
  styleUrls: ['./rami.component.css']
})
export class RamiComponent  {


  FormularioFormGroup:FormGroup




  constructor(

    private _builder:FormBuilder

  ) { this.FormularioFormGroup= this._builder.group ({
    nombre: ["", ],
    descripcion:["", ],
    genero: ["",],

    })}

  //ngOnInit(): void {
  mostrar (values){
    console.log(values)};
   

}


