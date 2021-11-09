import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaRemedioFormComponent } from './consulta-remedio-form.component';

describe('ConsultaRemedioFormComponent', () => {
  let component: ConsultaRemedioFormComponent;
  let fixture: ComponentFixture<ConsultaRemedioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaRemedioFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaRemedioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
