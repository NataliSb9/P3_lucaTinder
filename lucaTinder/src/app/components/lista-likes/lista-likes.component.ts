import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista-likes',
  templateUrl: './lista-likes.component.html',
  styleUrls: ['./lista-likes.component.scss']
})
export class ListaLikesComponent implements OnInit {
  mailUser:any =''
  currentUser!:Usuario
  listaGustos!:String[]
  listaQueridos!:Usuario[]

  constructor(private servicio:UsuarioService) { }

  ngOnInit(): void {
   let mailPersona=localStorage.getItem('usuarioActual');
   this.mailUser=mailPersona;
   this.servicio.getInfoUsuario(this.mailUser).subscribe((data)=>{
     console.log(data)})
  }

  
}
