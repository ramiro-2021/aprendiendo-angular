
import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    RamiComponent,
    RamaComponent,
    MasFormulariosComponent,
    EnviarEmailComponent,
    CalculadoraComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
