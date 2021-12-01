import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaLikesComponent } from './components/lista-likes/lista-likes.component';
import{ HttpClientModule} from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ListaDislikesComponent } from './components/lista-dislikes/lista-dislikes.component';
import { MatchesComponent } from './components/matches/matches.component';
import { UsuarioService } from './servicio/usuario.service';





@NgModule({
  declarations: [
    AppComponent,
    ListaLikesComponent,
    ListaDislikesComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
   
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
