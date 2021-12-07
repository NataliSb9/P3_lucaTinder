import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  mailUser:any =''
  currentUser!:Usuario
  listaGustos:any[]=[]
  listaMatches:Usuario[]=[]
  queridoActual!:Usuario
  public mostrador: boolean = false
  constructor(private servicio:UsuarioService) { }

  ngOnInit(): void {
   this.mailUser=localStorage.getItem('usuarioActual');
   this.servicio.getInfoUsuario(this.mailUser).subscribe((data:any)=>{
    this.currentUser=this.servicio.convertirAUsuario(data[0]);
    this.listaGustos=this.currentUser.arrLikes;
  
    for (let j=0;j<this.listaGustos.length;j++){
      this.servicio.getInfoUsuario(this.listaGustos[j]).subscribe((datos:any)=>{
        this.queridoActual=this.servicio.convertirAUsuario(datos[0]);
        for(let k=0; k<this.queridoActual.arrLikes.length; k++){
          if(this.queridoActual.arrLikes[k] == this.mailUser){
            this.listaMatches.push(this.queridoActual);
          }
        }
      }) 
    }
  
   })
  }  
}
