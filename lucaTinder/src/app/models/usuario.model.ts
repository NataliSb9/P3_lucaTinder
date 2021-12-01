export class Usuario {
  name: string = '';
  genero: string = '';
  email: string = '';
  prefGen: string = '';
  gustos: string[] = [];
  arrLikes: string[] = [];
  arrDislikes: string[] = [];
  descripcion: string = '';

  constructor(
    name: string,
    genero: string,
    email: string,
    prefGen: string,
    gustos: string[],
    arrLikes: string[],
    arrDislikes: string[],
    descripcion: string,
  ) {
    this.name = name;
    this.genero = genero;
    this.prefGen = prefGen;
    this.email = email;
    this.gustos = gustos;
    this.arrLikes = arrLikes;
    this.arrDislikes = arrDislikes;
    this.descripcion = descripcion;
  }
}
