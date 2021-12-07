import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// componentes:
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListaLikesComponent } from './components/lista-likes/lista-likes.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ListaDislikesComponent } from './components/lista-dislikes/lista-dislikes.component';
import { MatchesComponent } from './components/matches/matches.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path:'home',component:HomeComponent, children: [
      {path:'listaLike',component:ListaLikesComponent
      },
      {path:'profileInfo',component:ProfileInfoComponent
    },
      {path:'listaDislikes',component:ListaDislikesComponent,
      },
      {path:'listaMatches',component:MatchesComponent,
      }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
