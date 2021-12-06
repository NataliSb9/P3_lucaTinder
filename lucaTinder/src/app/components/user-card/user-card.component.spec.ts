import { ComponentFixture, TestBed } from '@angular/core/testing';

//model
import { UsuarioMatch } from 'src/app/models/usuarioMatch.model';

// HttpClient Error
import { HttpClientModule } from '@angular/common/http';

import { UserCardComponent } from './user-card.component';

fdescribe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCardComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // ---------------------------------
    // Test unitarios
    // ---------------------------------
  });
  it('Asigna true a checkIfIsLike tras pulsar el botón de Like', () => {
    component.pulsaLikeDislike(true);
    expect(component.checkIfIsLike).toBe(true);
  });

  it('Asigna false a checkIfIsLike tras pulsar el botón de Dislike', () => {
    component.pulsaLikeDislike(false);
    expect(component.checkIfIsLike).toBe(false);
  });
});
