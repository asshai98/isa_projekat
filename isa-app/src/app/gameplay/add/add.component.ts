import { Component, OnInit } from '@angular/core';
import {Characters} from "../character";
import {CharacterService} from "../character.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  character = new Characters();

  errorExists = false;
  errorText = "";
  constructor(private router: Router, private _service:CharacterService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this._service.addCharacter(this.character).subscribe(
      data => console.log("Reponse recieved!"),
      error => console.log("Exeption occured")
    );

    this.errorExists = false;

  }

  goBack() {
    this.router.navigate(['gameplay']);
  }

}
