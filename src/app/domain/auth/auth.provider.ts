import { Provider } from "@angular/core";
import { AuthService } from "@core/services/auth.service";

export const authProvider: Provider = {
    provide: 'authRepository',
    useClass: AuthService
}