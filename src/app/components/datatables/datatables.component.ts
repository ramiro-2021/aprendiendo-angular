import { HttpClient } from '@angular/common/http';
import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscriber } from 'rxjs';

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styles: [
  ]
})
export class DatatablesComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
 
  dtTrigger = new Subject<any>();
data :any;


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language:{url:'//cdn.datatables.net/plug-ins/1.10.22/i18n/Spanish.json'}

    };
    this.http.get('http://dummy.restapiexample.com/api/v1/employees')

    .subscribe((res:any)=>{
      this.data=res.data;
      this.dtTrigger.next();
    });
      
    }

  ngOnDestroy(): void { this.dtTrigger.unsubscribe();
  }
}
