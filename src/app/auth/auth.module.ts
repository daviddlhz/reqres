import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routing';
import { authProvider } from '@domain/auth/auth.provider';
import { HttpClientModule } from '@angular/common/http';
import { localStorageProvider } from '@domain/storage/localstorage.provide';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule,
  ],
  providers: [
    authProvider
  ]
})
export class AuthModule { }
