import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() usuario:any; 
  @Input() btnMostrador:any;
  constructor() { }

redirectToInfo(){
  window.location.href = './home/profileInfo/infoDeployed';
}


  ngOnInit(): void {
  }

}
