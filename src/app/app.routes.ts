import { MasFormulariosComponent } from './mas-formularios/mas-formularios.component';
import { RamaComponent } from './rama/rama.component';
import { RamiComponent } from './rami/rami.component';
import{Routes}from '@angular/router';
import{EnviarEmailComponent} from './enviar-email/enviar-email.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

export const routes :Routes=[
    { path: 'casa', component:MasFormulariosComponent},
    { path: 'rama', component:RamaComponent },
    { path: 'rami', component:RamiComponent },
    { path: 'email', component:EnviarEmailComponent },
    { path: 'calculadora', component:CalculadoraComponent }

];


