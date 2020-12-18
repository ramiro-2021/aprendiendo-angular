import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './rama.component.html',
  styleUrls: ['./rama.component.css']
})
export class RamaComponent implements OnInit {




  fecha: Date ;
  
  constructor(
    

  ) { }

  ngOnInit(): void {
    this.procesar();
  }
 
  procesar() {
  }

    //document.write(this.fecha.toString());

    // console.log(fecha.getHours() - 12);
    // console.log(fecha.getMinutes());
    // console.log(fecha.getSeconds());

    // console.log(fecha.getDay());
    // console.log(fecha.getDate());
    // console.log(fecha.getMonth());
    //console.log(this.fecha.getHours());

  }


