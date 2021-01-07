import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraerDatos2Component } from './traer-datos2.component';

describe('TraerDatos2Component', () => {
  let component: TraerDatos2Component;
  let fixture: ComponentFixture<TraerDatos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraerDatos2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraerDatos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
