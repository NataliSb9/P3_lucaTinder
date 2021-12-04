import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

// Model
import { UsuarioMatch } from '../../models/usuarioMatch.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() usuario: any;
  constructor(private usuarioService: UsuarioService) {}

  redirectToInfo() {
    window.location.href = './usuario/profileInfo/infoDeployed';
  }

  //debo incluir aqui el email 
  email: string = '';
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

  ngOnInit(): void {}
}
