import { NgModule } from '@angular/core';
import {SignUpComponent} from 'src/app/auth/sign-up/sign-up.component';
import { SignInComponent } from 'src/app/auth/sign-in/sign-in.component';
import { AuthComponent } from 'src/app/auth/auth.component';
import { EditAlbumComponent } from 'src/app/profil/edit-album/edit-album.component';
import { AboutComponent } from 'src/app/about/about.component';
import { ProfilComponent } from 'src/app/profil/profil.component';
import { MainComponent } from 'src/app/containers/main/main.component';
import { HomeComponent } from 'src/app/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import {EditProfilComponent} from './profil/edit-profil/edit-profil.component';
import {PortfolioComponent} from './portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'profil/:id', component: ProfilComponent },
      { path: 'profil/edit-profil', component: EditProfilComponent},
      { path: 'profil/edit-album', component: EditAlbumComponent },
      { path: 'profil/add-album', component: EditAlbumComponent },
      { path: 'about', component: AboutComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
