import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rami',
  templateUrl: './rami.component.html',
  styleUrls: ['./rami.component.css']
})
export class RamiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log("ESTOY IMPRIMIENTO");
    console.log("enviar fomulario");

  }

}
