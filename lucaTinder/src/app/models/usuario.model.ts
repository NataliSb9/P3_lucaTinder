export class Usuario {
  name: string = '';
  genero: string = '';
  email: string = '';
  age: number = 0;
  descripcion: string = '';
  gustos: string[] = [];
  arrLikes: string[] = [];
  arrDislikes: string[] = [];
  prefGen: string = '';
  foto: string ='';


  constructor(
    name: string,
    genero: string,
    email: string,
    age: number,
    descripcion: string,
    gustos: string[],
    arrLikes: string[],
    arrDislikes: string[],
    prefGen: string,
    foto: string,
  ) {
    this.name = name;
    this.genero = genero;
    this.email = email;
    this.age = age;
    this.descripcion =descripcion;
    this.gustos = gustos;
    this.arrLikes = arrLikes;
    this.arrDislikes = arrDislikes;
    this.prefGen = prefGen;
    this.foto = foto;
  }
}
