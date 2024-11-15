import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistermainComponent } from './pages/tiktok/auth/registermain/registermain.component';
import { LoginComponent } from './pages/tiktok/auth/login/login.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component'; // Importa el componente del feed
import { ValidacionComponent} from './pages/tiktok/auth/validacion/validacion.component'

export const routes: Routes = [
  { path: 'register', component: RegistermainComponent },
  { path: 'feed', component: FeedItemComponent }, // Nueva ruta para el feed
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'validacion', component: ValidacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule {}
