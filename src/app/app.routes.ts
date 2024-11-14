import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterStep1Component } from './pages/auth/register/register-step1/register-step1.component';
import { RegisterStep2Component } from './pages/auth/register/register-step2/register-step2.component';
import { RegisterStep3Component } from './pages/auth/register/register-step3/register-step3.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component'; // Importa el componente del feed

export const routes: Routes = [
  { path: 'register-step1', component: RegisterStep1Component },
  { path: 'register-step2', component: RegisterStep2Component },
  { path: 'register-step3', component: RegisterStep3Component },
  { path: 'feed', component: FeedItemComponent }, // Nueva ruta para el feed
  { path: '', redirectTo: 'register-step1', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
