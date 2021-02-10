
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import{RouterModule}from '@angular/router';
import { AppComponent } from './app.component';
import { RamiComponent } from './rami/rami.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RamaComponent } from './rama/rama.component';
import { MasFormulariosComponent } from './mas-formularios/mas-formularios.component';
import { routes } from './app.routes';
import { EnviarEmailComponent} from './enviar-email/enviar-email.component';
import { HttpClientModule } from '@angular/common/http';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import{AltaPacienteComponent} from './alta-paciente/alta-paciente.component' ;
import{OtroFormularioComponent} from './otro-formulario/otro-formulario.component';
import { ToastComponent } from './toast/toast.component';
import { ToastrModule } from 'ngx-toastr';
import { TraerDatosComponent } from './traer-datos/traer-datos.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NuevaCalculadoraComponent } from './nueva-calculadora/nueva-calculadora.component';
import {FormsModule} from '@angular/forms';
import {TraerDatos2Component} from './traer-datos2/traer-datos2.component';
import { DataTablesModule } from "angular-datatables";
import { DatatablesComponent } from './components/datatables/datatables.component';



@NgModule({
  declarations: [
    AppComponent,
    RamiComponent,
    RamaComponent,
    MasFormulariosComponent,
    EnviarEmailComponent,
    CalculadoraComponent,
    AltaPacienteComponent,
    OtroFormularioComponent,
    ToastComponent,
    TraerDatosComponent,
    ReactiveFormsComponent,
    NuevaCalculadoraComponent,
    TraerDatos2Component,
    DatatablesComponent,
  

	  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ToastrModule.forRoot() ,
    FormsModule,
    DataTablesModule
     ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
