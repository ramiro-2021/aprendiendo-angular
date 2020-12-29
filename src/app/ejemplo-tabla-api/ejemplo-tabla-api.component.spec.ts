import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploTablaApiComponent } from './ejemplo-tabla-api.component';

describe('EjemploTablaApiComponent', () => {
  let component: EjemploTablaApiComponent;
  let fixture: ComponentFixture<EjemploTablaApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploTablaApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploTablaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
