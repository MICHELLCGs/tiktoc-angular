import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/tiktok/auth/login/login.component';
import { ValidacionComponent } from './pages/tiktok/auth/validacion/validacion.component';
import { RegistermainComponent } from './pages/tiktok/auth/registermain/registermain.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ValidacionComponent,
    RegistermainComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule, // Añade FormsModule aquí
    CommonModule, 
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }