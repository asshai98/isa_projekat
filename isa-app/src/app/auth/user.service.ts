import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Users} from "./user";


@Injectable()
export class UserService{

  constructor(private _http :  HttpClient) {
  }

  public loginUserFromRemote(user:Users):Observable<any>{
    return this._http.post<any>("http://localhost:8181/login", user);
  }

  public registerUserFromRemote(user:Users):Observable<any>{
    return this._http.post<any>("http://localhost:8181/register", user);
  }


}
