import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {Characters} from "./character";

@Injectable()
export class CharacterService{

  constructor(private _http :  HttpClient) {}

  public fetchCharacterList():Observable<any>{
    return this._http.get<any>("http://localhost:8181/gameplay");
  }

  public addCharacter(character:Characters):Observable<any>{
    return this._http.post<any>("http://localhost:8181/add", character);
  }
}
