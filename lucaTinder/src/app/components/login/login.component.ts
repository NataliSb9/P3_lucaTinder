import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthService) {}



  async login(user: string, pass: string) {
    try {
      await this.auth.login(user, pass);
      // alert('Has Entrado');
      localStorage.setItem('usuarioActual', user);
      window.location.href = './usuario';
    } catch (e: any) {
      // alert(e.message);
      // console.log(e.message);
      if (
        e.message ==
        'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).'
      ) {
        alert('Este usuario no existe');
      } else if (
        e.message ==
        'Firebase: The email address is badly formatted. (auth/invalid-email).'
      ) {
        alert('Formato email incorrecto');
      } else if (
        e.message ==
        'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).'
      ) {
        alert('Email o contrasñea incorreto');
      } else {
        alert(e.message);
      }
    }
  }


  ngOnInit(): void {

  }
}
