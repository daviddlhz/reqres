import { Provider } from "@angular/core";
import { UserService } from "@core/services/user.service";

export const userProvider: Provider = {
    provide: 'userRepository',
    useClass: UserService
}