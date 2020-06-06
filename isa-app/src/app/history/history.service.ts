import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class HistoryService{

  constructor(private _http :  HttpClient) {}

  public fetchHistoryList():Observable<any>{
    return this._http.get<any>("http://localhost:8181/history");
  }
}
