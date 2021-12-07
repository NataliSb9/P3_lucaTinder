export class UsuarioMatch {
  email: string = '';
  myEmail: string = '';
  esLike: boolean = true

  constructor(email: string, myEmail: string, esLike: boolean) {
    this.email = email;
    this.myEmail = myEmail;
    this.esLike = esLike;;
  }
}
