import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CharacterService} from "../character.service";
import {Characters} from "../character";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  character = new Characters();

  errorExists = false;
  errorText = "";

  constructor(private router: Router, private _service:CharacterService, private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this._service.fetchCharactersById(id).subscribe(
      data => {
        console.log("Succes!");
        this.character=data
      },
      error => console.log("Exeption occured!")
    );
  }

  goBack() {
    this.router.navigate(['gameplay']);
  }

  onSubmit(form:NgForm){
    this._service.addCharacter(this.character).subscribe(
      data => console.log("Reponse recieved!"),
      error => console.log("Exeption occured")
    );

    this.errorExists = false;

  }
}
