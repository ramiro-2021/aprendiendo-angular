import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule}from '@angular/router';
import { AppComponent } from './app.component';
import { RamiComponent } from './rami/rami.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RamaComponent } from './rama/rama.component';
import { MasFormulariosComponent } from './mas-formularios/mas-formularios.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    RamiComponent,
    RamaComponent,
    MasFormulariosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

