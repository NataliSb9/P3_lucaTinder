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

const routes: Routes = [
  {
    path: 'login',
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
      {path:'profileInfo',component:ProfileInfoComponent ,children: [
        {path:'infoDeployed',component:UserCardDeployComponent}
      ]}
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
