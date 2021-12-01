import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDislikesComponent } from './lista-dislikes.component';

describe('ListaDislikesComponent', () => {
  let component: ListaDislikesComponent;
  let fixture: ComponentFixture<ListaDislikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDislikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDislikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
