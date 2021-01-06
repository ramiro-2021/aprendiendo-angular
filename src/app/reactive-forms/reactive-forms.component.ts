import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  FormularioFormGroup:FormGroup
  constructor(   private _builder:FormBuilder

    ) { this.FormularioFormGroup= this._builder.group ({  })}

    miFormulario= new FormGroup({
      username:new FormControl ('', Validators.required),
      userpassword: new FormControl('', Validators.required)

    });

  ngOnInit(): void {
  }
  
}