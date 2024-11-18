import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistermainComponent } from './pages/tiktok/auth/registermain/registermain.component';
import { LoginComponent } from './pages/tiktok/auth/login/login.component';
import { FeedItemComponent } from './components/FeedComponents/feed-item/feed-item.component'; // Importa el componente del feed
import { ValidacionComponent} from './pages/tiktok/auth/validacion/validacion.component'
import { HomeComponent } from './pages/tiktok/home/home.component';
import { ProfileComponent } from './pages/tiktok/profile/profile.component';
import { CommentsComponent } from './pages/tiktok/comments/comments.component';
import { UnlockedMoviesComponent } from './pages/tiktok/profile/unlocked-movies/unlocked-movies.component';

export const routes: Routes = [
  { path: 'register', component: RegistermainComponent },
  { path: 'feed', component: FeedItemComponent }, // Nueva ruta para el feed
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'validacion', component: ValidacionComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'comments/:id', component: CommentsComponent }, // Nueva ruta con parámetro `id`
  { path: 'peliculas', component: UnlockedMoviesComponent } 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule {}
