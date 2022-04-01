import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserCredentials } from "@domain/auth/auth.dto";
import { IAuthRepository } from "@domain/auth/auth.repository";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class AuthService implements IAuthRepository { 

    constructor(private http: HttpClient) { }

    authentication(credentials: UserCredentials): Observable<HttpResponse<any>> {
        return this.http.post<UserCredentials>(`${environment.baseUrl}/api/login`, credentials, { observe: 'response' })
    }
}