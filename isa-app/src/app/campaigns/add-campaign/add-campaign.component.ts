import { Component, OnInit } from '@angular/core';
import {Characters} from "../../gameplay/character";
import {Router} from "@angular/router";
import {CharacterService} from "../../gameplay/character.service";
import {NgForm} from "@angular/forms";
import {Campaigns} from "../campaign";
import {CampaignService} from "../campaign.service";
import {MatDialog} from "@angular/material/dialog";
import {SuccessComponent} from "../../auth/success/success.component";

@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.css']
})
export class AddCampaignComponent implements OnInit {

  campaign = new Campaigns();
  errorExists = false;
  errorText = "";

  constructor(private router: Router, private _service:CampaignService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    this._service.addCampaign(this.campaign).subscribe(
      data => console.log("Succes"),
      error => console.log("Exeption occured")
    );

    const dialogRef = this.dialog.open(SuccessComponent);
    this.errorExists = false;
  }

  goBack() {
    this.router.navigate(['campaigns']);
  }

}




