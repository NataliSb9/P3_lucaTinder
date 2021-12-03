import { Component, OnInit,Input } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'

// Model
import { UsuarioMatch } from '../../models/usuarioMatch.model'

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() usuario:any; 
  constructor(private usuarioService: UsuarioService) { }

redirectToInfo(){
  window.location.href = './usuario/profileInfo/infoDeployed';
}
email:string = 'christian.moller@example.com'
myEmail:any =  window.localStorage.getItem('usuarioActual')
// id:any = window.localStorage.getItem('idusuarioActual')

pulsaLike() {

let myUsuario:UsuarioMatch = new UsuarioMatch(
  this.email,
  this.myEmail,
)
console.warn(myUsuario)


  this.usuarioService.addLike(myUsuario).subscribe((data) => {
    console.log(data)
  })
}


  ngOnInit(): void {
  }

}
