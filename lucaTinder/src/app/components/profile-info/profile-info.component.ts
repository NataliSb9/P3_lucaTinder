import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
userToShowEmail:any=''
userToShow!:Usuario
arrUserToShow:Usuario[]=[]

  constructor(private servicio:UsuarioService) {}

   ngOnInit() {
    this.userToShowEmail=localStorage.getItem('perfilVisitable');
     this.servicio.getInfoUsuario(this.userToShowEmail).subscribe( (data:any)=>{
     this.userToShow= this.servicio.convertirAUsuario(data[0]);
     this.arrUserToShow.push(this.userToShow)
     
    })
 
    
    
   }  

}
