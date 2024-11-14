import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ValidacionComponent } from './pages/auth/validacion/validacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ValidacionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Añade FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }