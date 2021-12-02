import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
// models
import { Usuario } from '../../models/usuario.model';

// servicios
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

// FIREBASE
export class RegisterComponent implements OnInit {
  async registrar(emailFire: string, passFire: string) {
    try {
      await this.auth.registrar(emailFire, passFire);
      this.registraUsuarioDDBB()
      alert('Te has registrado');
      localStorage.setItem('usuarioActual', emailFire);
      window.location.href = './home';
    } catch (e: any) {
      alert(e.message);
    }
  }

  // FORMULARIO
  // usuario: Usuario[] = [];

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
  _id:number =0;
  name: string = '';
  email: string = '';
  pass: string = '';
  age!: number;
  genero: string = '';
  prefGen: string = '';
  arrLikes: string[] = [];
  arrDislikes: string[] = [];
  descripcion: string = '';
  foto: string = '';

  getSelectedCheckBox(): any[] {
    return this.gustos.filter((opt) => opt.checked).map((opt) => opt.value);
  }

  registraUsuarioDDBB() {
    this.getSelectedCheckBox();

    let usuario: Usuario = new Usuario(
      this._id,
      this.name,
      this.genero,
      this.email,
      this.age,
      this.descripcion,
      this.getSelectedCheckBox(),
      this.arrLikes,
      this.arrDislikes,
      this.prefGen,
      this.foto
    );

    this.usuarioService.agregarUsuario(usuario).subscribe((data) => {
      console.log(data);
    });
  }
  constructor(
    public auth: AuthService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    // console.log(this.gustos);
  }
}
