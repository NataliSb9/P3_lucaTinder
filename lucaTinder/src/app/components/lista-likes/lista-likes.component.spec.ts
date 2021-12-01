import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLikesComponent } from './lista-likes.component';

describe('ListaLikesComponent', () => {
  let component: ListaLikesComponent;
  let fixture: ComponentFixture<ListaLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaLikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
