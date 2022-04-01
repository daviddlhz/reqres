import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const uiRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: '', loadChildren: ()=> import('./users/users.module').then(m => m.UsersModule) }
        ]
    }
]