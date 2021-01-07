import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alta-paciente',
  templateUrl: './alta-paciente.component.html',
  styleUrls: ['./alta-paciente.component.css'],
  animations: [
    trigger('aniBoton', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'


      })),
      state('active', style({
        backgroundColor: '#ff0000',
        transform: 'scale(1.5)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})


export class AltaPacienteComponent implements OnInit {
  public state: string = "inactive";
  FormularioFormGroup: FormGroup


  constructor(
    private toastr: ToastrService,
    private _builder: FormBuilder,
    private http: HttpClient,
  
  )
     {
    this.FormularioFormGroup = this._builder.group({
      nombre: ["",[Validators.required]],
      apellido: ["",[Validators.required]],
      documento: ["",[Validators.required]],
      email: ["",[Validators.required]],
      obrasocial: ["",[Validators.required]],
      marcapropia: ["",[Validators.required]]

    })
  }

  ngOnInit(): void {
  }

 

  
  togleBoton() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }


  mostrar(value) 
    {
   
    console.log(value)
    this.altaPaciente(value)
    }


  altaPaciente(value) {
    console.log("enviando alta")


    let request = {
      "nombre": value.nombre,
      "apellido": value.apellido,
      "dni": value.documento,
      "mail": value.email,
      "obraSocial": value.obrasocial,
      "mascaParticular": value.marcaPropia

    }
    this.http.post<any>('http://192.168.0.11:8989/mailsender/clientes/crear', request).
      subscribe({
        next: response => {
          console.log(response);
                     
          this.enviarmail(value)
            this.FormularioFormGroup.reset()
          this.toastr.success("funciono el envio")
          },
        error: error => {
          console.log(error)
         
          this.toastr.error("error al enviar el mail")
       }
      })
  }

  enviarmail(value) {
    console.log("LOADING");

    let request = {
      "destinatario": value.email,
      "asunto": value.nombre + " " + value.apellido,
      "mensaje": "Documento: " + value.documento + ", OS: " + value.obrasocial +
        ", Marca Propia: " + value.marcapropia
    }

    this.http.post<any>('http://192.168.0.11:8989/mailsender/enviar', request).
      subscribe ( {
        next: response => {
          console.log(response);
      
        },
         
        error: error => {
          console.log(error)
        }
      })
  }
}
