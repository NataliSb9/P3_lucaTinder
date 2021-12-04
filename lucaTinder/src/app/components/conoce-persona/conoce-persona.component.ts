import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

import { UsuarioMatch } from 'src/app/models/usuarioMatch.model';
@Component({
  selector: 'app-conoce-persona',
  templateUrl: './conoce-persona.component.html',
  styleUrls: ['./conoce-persona.component.scss']
})
export class ConocePersonaComponent implements OnInit {
  usuario!: Usuario;
  email!: string | null;
  generoPreference!: string;
  personas: Usuario[] = [];

  constructor( private usuarioServicie: UsuarioService) { 
    this.email= localStorage.getItem('usuarioActual')
  }

  
  ngOnInit(): void {
    if (typeof this.email === "string") {
      this.usuarioServicie.getInfoUsuario(this.email).subscribe((data: any) => {
        this.usuario = this.usuarioServicie.convertirAUsuarioDeUnArr(data);
        this.generoPreference = this.usuario.prefGen;
        console.log(this.generoPreference)

        this.usuarioServicie.getDiezCandidatos(this.generoPreference).subscribe((data:any) =>{
          this.personas = this.usuarioServicie.convertirAUsuarios(data)
          console.log(this.personas)
        })
      })
    }
    
  }

}
