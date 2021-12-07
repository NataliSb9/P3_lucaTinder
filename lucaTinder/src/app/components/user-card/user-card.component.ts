import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class UserCardComponent implements OnInit {
  @Input() usuario:any; 
  @Input() btnMostrador:any;
  public usuarioExportable!:any
  constructor() {}

// redirectToInfo(){
//   window.location.href = './home/profileInfo/infoDeployed';
//localStorage.setItem('perfilVisitable', this.usuario.email);
// }



 ngOnInit(): void {
   this.usuarioExportable=this.usuario 
    //console.log(this.usuario,this.usuarioExportable)
  }

  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  getUrl(){
    console.log("foto: "+this.usuario.foto);
    return "url("+this.usuario.foto+")";
  }

}
