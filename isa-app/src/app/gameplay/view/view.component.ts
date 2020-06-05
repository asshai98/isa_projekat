import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CharacterService} from "../character.service";
import {Characters} from "../character";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  character = new Characters();
  characters:Characters[];

  constructor(private router: Router, private _service:CharacterService, private _activatedRoute:ActivatedRoute) {
    this.characters = [];
  }

  ngOnInit() {
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this._service.fetchCharactersById(id).subscribe(
      data => {
        console.log("Succes!");
        console.log(this.character=data);
        this.characters.push(this.character=data);
      },
      error => console.log("Exeption occured!")
    );
  }

}
