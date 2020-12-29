import { Component, OnInit } from '@angular/core';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{trigger,state,style,animate,transition} from '@angular/animations';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { ToastrService } from 'ngx-toastr';

@Component ( {
  selector: 'app-otro-formulario',
  templateUrl: './otro-formulario.component.html',
  styleUrls: ['./otro-formulario.component.css'],
  animations:[
    trigger('aniBoton',  [
      state('inactive' , style({
     backgroundColor:'#eee',
     transform:'scale(1)'


      })),
    state('active', style({
      backgroundColor:'#ff0000',
      transform:'scale(1.5)'
    })),
  transition('inactive => active', animate('100ms ease-in')),
  transition('active => inactive', animate('100ms ease-out'))
])
]
})
export class OtroFormularioComponent implements OnInit {
public state:string="inactive";
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
togleBoton(){
  this.state=this.state==='active' ? 'inactive' : 'active';
}
showToaster(){
  this.toastr.success("Hello, I'm the toastr message.")
}
}
