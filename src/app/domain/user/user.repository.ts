import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { IResponseUsers } from "./user.dto";

export interface IUserRepository {
    getUsers(): Observable<HttpResponse<IResponseUsers>>;
}