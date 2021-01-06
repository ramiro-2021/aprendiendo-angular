import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraerDatosComponent } from './traer-datos.component';

describe('TraerDatosComponent', () => {
  let component: TraerDatosComponent;
  let fixture: ComponentFixture<TraerDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraerDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraerDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
