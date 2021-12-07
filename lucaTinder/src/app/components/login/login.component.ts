import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public auth: AuthService,
    private usuarioService: UsuarioService
  ) {}

  emailActual: string = '';
  usuario: any;

  async login(user: string, pass: string) {
    try {
      await this.auth.login(user, pass);
      // alert('Has Entrado');

      // alert('Has Entrado');

      localStorage.setItem('usuarioActual', user);

      console.log(user);
      this.emailActual = user;
      // window.location.href = './usuario';
      this.usuarioService
        .getInfoUsuario(this.emailActual)
        .subscribe((data: any) => {
          this.usuario = this.usuarioService.convertirAUsuarioDeUnArr(data);
          localStorage.setItem('idusuarioActual', this.usuario._id);
        });

      localStorage.setItem('usuarioActual', user);
      window.location.href = './home';
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

  ngOnInit(): void {}
}
