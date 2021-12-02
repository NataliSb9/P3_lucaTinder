import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListaLikesComponent } from './components/lista-likes/lista-likes.component';
import{ HttpClientModule} from '@angular/common/http';
import { ListaDislikesComponent } from './components/lista-dislikes/lista-dislikes.component';
import { MatchesComponent } from './components/matches/matches.component';
import { UsuarioService } from './services/usuario.service';
import { HomeComponent } from './components/home/home.component';

//FIREN
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth/';
import { environment } from 'src/environments/environment';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserCardDeployComponent } from './components/user-card-deploy/user-card-deploy.component';
import { CandidatosComponent } from './components/candidatos/candidatos.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ListaLikesComponent,
    ListaDislikesComponent,
    MatchesComponent,
    HomeComponent,
    UserCardComponent,
    UserCardDeployComponent,
    CandidatosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})

export class AppModule { }
