import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistermainComponent } from './pages/tiktok/auth/registermain/registermain.component';
import { LoginComponent } from './pages/tiktok/auth/login/login.component';


import { HomeComponent } from './pages/tiktok/home/home.component';
import { ValidacionComponent} from './pages/tiktok/auth/validacion/validacion.component'
import { ProfileComponent } from './pages/tiktok/profile/profile.component';

export const routes: Routes = [
  { path: 'register', component: RegistermainComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'validacion', component: ValidacionComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule {}
