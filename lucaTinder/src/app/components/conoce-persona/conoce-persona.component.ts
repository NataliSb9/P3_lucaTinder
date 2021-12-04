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

  constructor( private usuarioService: UsuarioService) { 
    this.email= localStorage.getItem('usuarioActual')
  }


  myEmail: any = window.localStorage.getItem('usuarioActual');

  pulsaLike(emailLike:string) {
    let eslike = true;
    this.email= emailLike;
    console.log(this.email)
    let myUsuario: UsuarioMatch = new UsuarioMatch(
      this.email,
      this.myEmail,
      eslike
    );
    // console.warn(myUsuario);

    this.usuarioService.addLikeOrDislike(myUsuario).subscribe((data) => {
      console.log(data);
    });
  }

  pulsaDislLike(emailDislike:string) {
    let eslike = false;
    this.email = emailDislike;
    let myUsuario: UsuarioMatch = new UsuarioMatch(
      this.email,
      this.myEmail,
      eslike
    );

    this.usuarioService.addLikeOrDislike(myUsuario).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    if (typeof this.email === "string") {
      this.usuarioService.getInfoUsuario(this.email).subscribe((data: any) => {
        this.usuario = this.usuarioService.convertirAUsuarioDeUnArr(data);
        this.generoPreference = this.usuario.prefGen;
        console.log(this.generoPreference)

        this.usuarioService.getDiezCandidatos(this.generoPreference).subscribe((data:any) =>{
          this.personas = this.usuarioService.convertirAUsuarios(data)
          console.log(this.personas)
        })
      })
    }
    
  }

}
