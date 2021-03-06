import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const authRoutes: Routes = [
    { 
      path: '', 
      component: LoginComponent,
      children: [
        { path: 'register', component: RegisterComponent }
      ]     
    }
]