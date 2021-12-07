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
  checkIfIsLike: boolean = true;

  pulsaLikeDislike(checkIfIsLike: boolean, emailLikeDislike: string) {
    let myUsuario: UsuarioMatch = new UsuarioMatch(
      this.email = emailLikeDislike,
      this.myEmail,
      checkIfIsLike
    );

    this.usuarioService.addLikeOrDislike(myUsuario).subscribe((data) => {
      console.log(data);
    });

    // Ayudante para Test
    this.checkIfIsLike = checkIfIsLike;
  }

  ngOnInit(): void {}
}
