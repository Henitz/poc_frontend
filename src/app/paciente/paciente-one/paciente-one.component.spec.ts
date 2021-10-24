import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteOneComponent } from './paciente-one.component';

describe('PacienteOneComponent', () => {
  let component: PacienteOneComponent;
  let fixture: ComponentFixture<PacienteOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
