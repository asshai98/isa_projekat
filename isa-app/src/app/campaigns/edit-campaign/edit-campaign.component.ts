import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Campaigns} from "../campaign";
import {CampaignService} from "../campaign.service";

@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.css']
})
export class EditCampaignComponent implements OnInit {

  campaign = new Campaigns();

  errorExists = false;
  errorText = "";

  constructor(private router: Router, private _service:CampaignService, private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let id  = parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this._service.fetchCampaignsById(id).subscribe(
      data => {
        console.log("Success!");
        this.campaign = data;
      },
      error => console.log("Exeption occured!")
    );
  }

  goBack() {
    this.router.navigate(['campaigns']);
  }

  onSubmit(form:NgForm){
    this._service.addCampaign(this.campaign).subscribe(
      data => console.log("Ok!"),
      error => console.log("Exeption!")
  );
    this.errorExists = false;
  }

}
