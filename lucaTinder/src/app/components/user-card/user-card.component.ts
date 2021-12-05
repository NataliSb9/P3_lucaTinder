import { Component, OnInit,Input} from '@angular/core';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() usuario:any; 
  @Input() btnMostrador:any;
  public usuarioExportable!:any
  constructor() {}

public redirectToInfo():void {
  window.location.href = './home/profileInfo'; 
  localStorage.setItem('perfilVisitable', this.usuario.email);
}


 ngOnInit(): void {
   this.usuarioExportable=this.usuario 
    //console.log(this.usuario,this.usuarioExportable)
  }


}
