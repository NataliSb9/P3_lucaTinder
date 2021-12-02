import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocePersonaComponent } from './conoce-persona.component';

describe('ConocePersonaComponent', () => {
  let component: ConocePersonaComponent;
  let fixture: ComponentFixture<ConocePersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConocePersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
