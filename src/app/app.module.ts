
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

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
