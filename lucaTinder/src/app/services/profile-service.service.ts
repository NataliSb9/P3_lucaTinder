import { Injectable } from '@angular/core';
import { UserCardComponent } from '../components/user-card/user-card.component';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
usuarioParaDetallar!:any
  constructor(private userCard:UserCardComponent) {
    this.usuarioParaDetallar=this.userCard.usuarioExportable
    console.log(this.userCard.usuarioExportable)
   }


}
