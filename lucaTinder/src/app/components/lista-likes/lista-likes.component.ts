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
  listaGustos:any[]=[]
  listaQueridos:Usuario[]=[]
  queridoActual!:Usuario
  constructor(private servicio:UsuarioService) { }

  ngOnInit(): void {
   this.mailUser=localStorage.getItem('usuarioActual');
   this.servicio.getInfoUsuario(this.mailUser).subscribe((data:any)=>{
    this.currentUser=this.servicio.convertirAUsuario(data[0]);
    this.listaGustos=this.currentUser.arrLikes;
    //console.log(this.listaGustos);
    for (let j=0;j<this.listaGustos.length;j++){
      this.servicio.getInfoUsuario(this.listaGustos[j]).subscribe((datos:any)=>{
        //this.listaQueridos.push(this.servicio.convertirAUsuario(datos[0]))
        this.queridoActual=this.servicio.convertirAUsuario(datos[0])
        this.listaQueridos.push(this.queridoActual)
        console.log(this.servicio.convertirAUsuario(datos[0]))
        
      })
      
    }
    console.log(this.listaQueridos)
   })
    
   
  }  

}
