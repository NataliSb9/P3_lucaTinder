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

  email: string = 'test21';
  myEmail: any = window.localStorage.getItem('usuarioActual');

  pulsaLike() {
    let eslike = true;
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

  pulsaDislLike() {
    let eslike = false;
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
