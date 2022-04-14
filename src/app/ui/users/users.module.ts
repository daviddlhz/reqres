import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { userProvider } from '@domain/user/user.provide';
import { UsersComponent } from './users.component';
import { usersRoutes } from './users.routing';

@NgModule({
    declarations: [UsersComponent],
    exports: [UsersComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forChild(usersRoutes)
    ],
    providers: [userProvider]
})
export class UsersModule {}