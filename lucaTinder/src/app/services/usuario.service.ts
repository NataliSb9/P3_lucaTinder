import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';

import { UsuarioMatch } from '../models/usuarioMatch.model'

//Me traigo el HTttpHeaders para luego poder hacer el delete con angular, mirar el siguiente recurso para poder eliminar con el body y no a través de parametros de un req.query
//https://stackoverflow.com/questions/54017088/angular-7-http-delete-api-handle-body/54017685

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private urlApi: string = 'http://localhost:3000/lucatinder';

  constructor(private http: HttpClient) {}

  //Metodo para obtener la info de todos los usuarios
  getInfoUsuarios(): any {
    return this.http.get(this.urlApi);
  }

  //Metodo para obtener la info de un solo usuario
  getInfoUsuario(email: string) {
    return this.http.get(this.urlApi + '/usuario' + '?email=' + email);
  }

  getInfoUsuarioID(email: string) {
    return this.http.get(this.urlApi + '/usuario_id' + '?email=' + email);
  }

  getDiezCandidatos(prefGen: string): any {
    return this.http.get(this.urlApi + 'home' + '?prefgen=' + prefGen);
  }

  //Metodos para convertir la información que me llega de la API
  convertirAUsuarioDeUnArr(resp: any[]): Usuario {
    let usuario: Usuario = new Usuario(
      0,
      '',
      '',
      '',
      0,
      '',
      [],
      [],
      [],
      '',
      ''
    );
    for (let i = 0; i < resp.length; i++) {
      usuario = new Usuario(
        resp[i]._id,
        resp[i].name,
        resp[i].genero,
        resp[i].email,
        resp[i].age,
        resp[i].descripcion,
        resp[i].gustos,
        resp[i].arrLikes,
        resp[i].arrDislike,
        resp[i].prefGen,
        resp[i].foto
      );
    }
    return usuario;
  }

  convertirAUsuario(resp: any): Usuario {
    let usuario: Usuario = new Usuario(
      resp._id,
      resp.name,
      resp.genero,
      resp.email,
      resp.age,
      resp.descripcion,
      resp.gustos,
      resp.arrLikes,
      resp.arrDislike,
      resp.prefGen,
      resp.foto
    );

    return usuario;
  }
  convertirAUsuarios(resp: any[]): Usuario[] {
    let usuarios: Usuario[] = [];
    for (let i = 0; i < resp.length; i++) {
      let usuario: Usuario = new Usuario(
        resp[i]._id,
        resp[i].name,
        resp[i].genero,
        resp[i].email,
        resp[i].age,
        resp[i].descripcion,
        resp[i].gustos,
        resp[i].arrLikes,
        resp[i].arrDislike,
        resp[i].prefGen,
        resp[i].foto
      );

      usuarios.push(usuario);
    }
    return usuarios;
  }

  agregarUsuario(usuario: Usuario) {
    return this.http.post(this.urlApi + '/join', usuario);
  }

  addLike(myUsuario: UsuarioMatch) {
    console.log('hola desde servicio ' + myUsuario);
    return this.http.put(this.urlApi + '/usuario/update' + '?email=' + myUsuario.myEmail, {body: myUsuario} );
  }
}