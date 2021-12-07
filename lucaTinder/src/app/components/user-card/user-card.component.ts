import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { UsuarioMatch } from 'src/app/models/usuarioMatch.model';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class UserCardComponent implements OnInit {
  @Input() usuario:any; 
  @Input() btnMostrador:any;
  public usuarioExportable!:any
  constructor(private usuarioService: UsuarioService) {}

// redirectToInfo(){
//   window.location.href = './home/profileInfo/infoDeployed';
//localStorage.setItem('perfilVisitable', this.usuario.email);
// }



 ngOnInit(): void {
   this.usuarioExportable=this.usuario 
    //console.log(this.usuario,this.usuarioExportable)
  }

  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  getUrl(){
    console.log("foto: "+this.usuario.foto);
    return "url("+this.usuario.foto+")";
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
}
