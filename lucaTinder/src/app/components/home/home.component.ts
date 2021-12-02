import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private userService: UsuarioService) {
   
  }


  //Pendiente ver como hago que me mande las 10 personas '-________-
  ngOnInit(): void {

  }

}
