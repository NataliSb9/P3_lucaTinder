import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulo Servicio
import { UsuarioService } from './servicio/usuario.service';

//Modulo para poder vincular el servicio con la API
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
   
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
