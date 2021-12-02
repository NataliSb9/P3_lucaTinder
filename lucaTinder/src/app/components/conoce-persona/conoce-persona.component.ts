import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-conoce-persona',
  templateUrl: './conoce-persona.component.html',
  styleUrls: ['./conoce-persona.component.scss']
})
export class ConocePersonaComponent implements OnInit {
  usuario!: Usuario;
  email!: string | null;

  constructor( private usuarioServicio: UsuarioService) { 
    this.email= localStorage.getItem('usuarioActual')
  }

  getInfoUsuario(){

  }

  ngOnInit(): void {
    if (typeof this.email === "string") {
      console.log(this.email)
      this.usuarioServicio.getInfoUsuario(this.email).subscribe((data: any) => {
        this.usuario = this.usuarioServicio.convertirAUsuarioDeUnArr(data);
        console.log(this.usuario)
      })
    }
  }

}
