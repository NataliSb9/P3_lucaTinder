import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Usuario } from '../modelo/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlApi: string = "http://localhost:3000/lucatinder"
  constructor(private http: HttpClient) { }

  getInfoUsuarios():any{
    return this.http.get(this.urlApi)
  }


  convertirAUsuario(resp:any):Usuario{
      let usuario:Usuario = new Usuario(resp.id, resp.name, resp.email, resp.age, resp.descripcion, 
      resp.gustos, resp.arrLike, resp.arrDislike, resp.prefGen, resp.foto)

      return usuario;
  }
}
