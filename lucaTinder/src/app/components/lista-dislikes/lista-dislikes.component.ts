import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista-dislikes',
  templateUrl: './lista-dislikes.component.html',
  styleUrls: ['./lista-dislikes.component.scss']
})
export class ListaDislikesComponent implements OnInit {
  mailUser:any =''
  currentUser!:Usuario
  listaNoGustos:any[]=[]
  listaNoQueridos:Usuario[]=[]
  noQueridoActual!:Usuario
  public mostrador: boolean = false
  constructor(private servicio:UsuarioService) { }

  ngOnInit(): void {
   this.mailUser=localStorage.getItem('usuarioActual');
   this.servicio.getInfoUsuario(this.mailUser).subscribe((data:any)=>{
    this.currentUser=this.servicio.convertirAUsuario(data[0]);
    this.listaNoGustos=this.currentUser.arrDislikes;
   
    for (let j=0;j<this.listaNoGustos.length;j++){
      this.servicio.getInfoUsuario(this.listaNoGustos[j]).subscribe((datos:any)=>{
        //this.listaNoQueridos.push(this.servicio.convertirAUsuario(datos[0]))
        this.noQueridoActual=this.servicio.convertirAUsuario(datos[0])
        this.listaNoQueridos.push(this.noQueridoActual)
        
      })
      
    }
   
   })
  }
}
