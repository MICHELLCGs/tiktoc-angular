import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/tiktok/auth/login/login.component';
import { ValidacionComponent } from './pages/tiktok/auth/validacion/validacion.component';
import { RegistermainComponent } from './pages/tiktok/auth/registermain/registermain.component';

import { SidebarComponent } from './components/FeedComponents/sidebar/sidebar.component';
import { HomeComponent } from './pages/tiktok/home/home.component';
import { LogooComponent } from './components/FeedComponents/sidebar/logoo/logoo.component';
import { MenuComponent } from './components/FeedComponents/sidebar/menu/menu.component';
import { MenuItemComponent } from './components/FeedComponents/sidebar/menu-item/menu-item.component';
import { LoginPromptComponent } from './components/FeedComponents/sidebar/login-prompt/login-prompt.component';
import { LoginButtonComponent } from './components/FeedComponents/sidebar/login-button/login-button.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ValidacionComponent,
    RegistermainComponent,
    SidebarComponent,
    HomeComponent,
    LogooComponent,
    MenuComponent,
    MenuItemComponent,
    LoginPromptComponent,
    LoginButtonComponent
    
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