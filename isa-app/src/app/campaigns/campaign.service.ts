import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Characters} from "../gameplay/character";
import {Campaigns} from "./campaign";


@Injectable()
export class CampaignService{

  constructor(private _http :  HttpClient) {}

  public fetchCampaignList():Observable<any>{
    return this._http.get<any>("http://localhost:8181/campaigns");
  }

  public addCampaign(campaign:Campaigns):Observable<any>{
    return this._http.post<any>("http://localhost:8181/campaigns/add", campaign);
  }

  //path variable
  public fetchCampaignsById(campaign_id:number):Observable<any>{
    return  this._http.get<any>("http://localhost:8181/campaigns/"+campaign_id);
  }

  public deleteCampaignById(campaign_id:number):Observable<any>{
    return this._http.get<any>("http://localhost:8181/campaigns/delete/"+campaign_id);
  }


}
