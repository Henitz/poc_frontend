import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaOneComponent } from './consulta-one.component';

describe('ConsultaOneComponent', () => {
  let component: ConsultaOneComponent;
  let fixture: ComponentFixture<ConsultaOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
