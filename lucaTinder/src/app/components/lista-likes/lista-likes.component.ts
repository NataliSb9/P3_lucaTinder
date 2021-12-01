import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-lista-likes',
  templateUrl: './lista-likes.component.html',
  styleUrls: ['./lista-likes.component.scss']
})
export class ListaLikesComponent implements OnInit {
// Node/Express API
REST_API: string = 'http://localhost:8000/api';
 
// Http Header
httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    
  }

  
}
