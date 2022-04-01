import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { usersRoutes } from './users.routing';

@NgModule({
    declarations: [UsersComponent],
    exports: [UsersComponent],
    imports: [RouterModule.forChild(usersRoutes)]
})
export class UsersModule {}