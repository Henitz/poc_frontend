import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemedioOneComponent } from './remedio-one.component';

describe('RemedioOneComponent', () => {
  let component: RemedioOneComponent;
  let fixture: ComponentFixture<RemedioOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemedioOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemedioOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
