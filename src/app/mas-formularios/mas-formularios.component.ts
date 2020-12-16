
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mas-formularios',
  templateUrl: './mas-formularios.component.html',
  styleUrls: ['./mas-formularios.component.css']
})
export class MasFormulariosComponent implements OnInit {


  FormularioFormGroup:FormGroup


  constructor(
    private _builder:FormBuilder

  ) { this.FormularioFormGroup= this._builder.group ({
    nombre: ["", ],
    apellido:["", ],
    documento: ["",],
    fecha: ["", ],
    edad: ["", ],
    email:["", ],
    genero: ["",],
    mensaje:["", ]
    
  })}

  ngOnInit(): void {
  }
mostrar(value){
  console.log(value)
 }
}
