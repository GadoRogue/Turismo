import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastronomicoComponent } from './gastronomico.component';

describe('GastronomicoComponent', () => {
  let component: GastronomicoComponent;
  let fixture: ComponentFixture<GastronomicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastronomicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastronomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
