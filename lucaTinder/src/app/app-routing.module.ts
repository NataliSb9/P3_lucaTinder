import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// componentes:
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListaLikesComponent } from './components/lista-likes/lista-likes.component';
import { HomeComponent } from './components/home/home.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserCardDeployComponent } from './components/user-card-deploy/user-card-deploy.component'; 
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import{ConocePersonaComponent} from './components/conoce-persona/conoce-persona.component';

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
      {path:'listaLike',component:ListaLikesComponent,children: [
        {path:'Card',component:UserCardComponent,
      },
      ]},
      {path:'profileInfo',component:ProfileInfoComponent ,children: [
        {path:'infoDeployed',component:UserCardDeployComponent}
      ]},
      {path: 'conocepersona', component:ConocePersonaComponent, children: [
        {path:'Card',component:UserCardComponent,}
      ]}
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
