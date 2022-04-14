import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IResponseUsers } from "@domain/user/user.dto";
import { IUserRepository } from "@domain/user/user.repository";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class UserService implements IUserRepository {
    
    constructor(private http: HttpClient) { }

    getUsers(): Observable<HttpResponse<IResponseUsers>> {
        return this.http.get<IResponseUsers>(`${environment.baseUrl}/api/users?page=2`, { observe: 'response' });    
    }
}