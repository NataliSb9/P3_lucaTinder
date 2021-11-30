import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
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

  
  // OPCIONES GUSTOS
  options: any[] = [
    { name: 'Tarta', value: 'tarta', checked: false },
    { name: 'Avión', value: 'avion', checked: false },
  ];

  getSelectedOptions() {
    console.log(
      this.options.filter((opt) => opt.checked).map((opt) => opt.value)
    );
  }

  registraTest() {}
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    console.log(this.options);
  }
}
