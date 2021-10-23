import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoOneComponent } from './medico-one.component';

describe('MedicoOneComponent', () => {
  let component: MedicoOneComponent;
  let fixture: ComponentFixture<MedicoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
