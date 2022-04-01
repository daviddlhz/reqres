import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Inject, Injectable, Provider } from "@angular/core";
import { storageKey } from "@core/constants/storagekey.enum";
import { ILocalStorageRepository } from "@domain/storage/localstorage.repository";
import { Observable } from "rxjs";

@Injectable()
export class InterceptorService implements HttpInterceptor {

    constructor(@Inject('localStorageRepository') private localStorageService: ILocalStorageRepository) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = this.localStorageService.getValue(storageKey.TOKEN);
        let request = req;
        
        if(token) {
            request = req.clone({
              setHeaders: {
                authorization: `Bearer ${token}`,
              },
            });
        }

        return next.handle(request);
    }
}

export const interceptorProvider: Provider = [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
];
