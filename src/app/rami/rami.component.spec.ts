import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamiComponent } from './rami.component';

describe('RamiComponent', () => {
  let component: RamiComponent;
  let fixture: ComponentFixture<RamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
