import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroFormularioComponent } from './otro-formulario.component';

describe('OtroFormularioComponent', () => {
  let component: OtroFormularioComponent;
  let fixture: ComponentFixture<OtroFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtroFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtroFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
