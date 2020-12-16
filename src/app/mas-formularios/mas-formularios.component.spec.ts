import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasFormulariosComponent } from './mas-formularios.component';

describe('MasFormulariosComponent', () => {
  let component: MasFormulariosComponent;
  let fixture: ComponentFixture<MasFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasFormulariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
