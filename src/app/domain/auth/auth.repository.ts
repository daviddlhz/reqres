import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserCredentials } from "./auth.dto";

export interface IAuthRepository {
    authentication(credentials: UserCredentials): Observable<HttpResponse<any>>
}