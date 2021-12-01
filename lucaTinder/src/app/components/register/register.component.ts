import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
// models
import { Usuario } from '../../models/usuario.model';

@Component({
  selector   : 'app-register',
  templateUrl: './register.component.html',
  styleUrls  : ['./register.component.scss'],
})

// FIREBASE
export class RegisterComponent implements OnInit {
  async login(user: string, pass: string) {
    try {
      await this.auth.login(user, pass);
      alert('Has Entrado');
    } catch (e: any) {
      alert(e.message);
    }
  }

  async registrar(user: string, pass: string) {
    try {
      await this.auth.registrar(user, pass);
      alert('Te has registrado');
    } catch (e: any) {
      alert(e.message);
    }
  }

  // FORMULARIO
  usuario: Usuario[] = [];

  gustos: any[] = [
    { name: 'Libros', value: 'libros', checked: false },
    { name: 'Café', value: 'cafe', checked: false },
    { name: 'Netflix', value: 'netflix', checked: false },
    { name: 'Youtube', value: 'youtube', checked: false },
    { name: 'Desarrollo', value: 'desarrollo', checked: false },
    { name: 'Fútbol', value: 'futbol', checked: false },
    { name: 'Cine', value: 'cine', checked: false },
    { name: 'Socialismo', value: 'socialismo', checked: false },
    { name: 'Té', value: 'te', checked: false },
    { name: 'Filetes', value: 'filetes', checked: false },
    { name: 'Marvel', value: 'marvel', checked: false },
    { name: 'Pan', value: 'pan', checked: false },
    { name: 'Chocolate', value: 'chocolate', checked: false },
  ];
  name       : string = '';
  email      : string = '';
  pass       : string = '';
  age!        : number;
  genero     : string = '';
  prefGen    : string = '';
  arrLikes   : string[] = [];
  arrDislikes: string[] = [];
  descripcion: string = '';
  foto: string = "";

  getSelectedOptions(): any[] {
    return this.gustos.filter((opt) => opt.checked).map((opt) => opt.value);
  }

  registraTest() {
    this.getSelectedOptions();
    this.usuario.push(
      new Usuario(
        this.name,
        this.genero,
        this.email,
        this.age,
        this.descripcion,
        this.getSelectedOptions(),
        this.arrLikes,
        this.arrDislikes,
        this.prefGen,
        this.foto
      )
    );

    console.log(this.usuario);
  }
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    // console.log(this.gustos);
  }
}
