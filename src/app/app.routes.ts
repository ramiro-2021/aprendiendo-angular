import { MasFormulariosComponent } from './mas-formularios/mas-formularios.component';
import { RamaComponent } from './rama/rama.component';
import { RamiComponent } from './rami/rami.component';
import{Routes}from '@angular/router';
import{EnviarEmailComponent} from './enviar-email/enviar-email.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import{AltaPacienteComponent} from './alta-paciente/alta-paciente.component' ;
import{OtroFormularioComponent} from './otro-formulario/otro-formulario.component';
import { ToastComponent } from './toast/toast.component';


export const routes :Routes=[
    { path: 'casa', component:MasFormulariosComponent},
    { path: 'rama', component:RamaComponent },
    { path: 'rami', component:RamiComponent },
    { path: 'email', component:EnviarEmailComponent },
    { path: 'calculadora', component:CalculadoraComponent },
    { path: 'alta-paciente', component:AltaPacienteComponent },
    {path:'otro-formulario', component:OtroFormularioComponent},
    {path:'toast', component:ToastComponent}

];  


