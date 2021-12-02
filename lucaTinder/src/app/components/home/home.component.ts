import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  emailUser: string | null = ""
  usuario!: Usuario;
  constructor(private userService: UsuarioService) {
    this.emailUser = localStorage.getItem("usuarioActual")
  }


  //Pendiente ver como hago que me mande las 10 personas '-________-
  ngOnInit(): void {
    // if (typeof this.emailUser === "string") {
    //   console.log(this.emailUser)
    //   this.userService.getInfoUsuario(this.emailUser).subscribe((data: any) => {
    //     this.usuario = this.userService.convertirAUsuarioDeUnArr(data);
    //     console.log(this.usuario)
    //   })
    // }
  }

}
