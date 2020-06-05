import {Component, OnInit, ViewChild} from '@angular/core';
import {CharacterService} from "./character.service";
import {MatTableDataSource} from "@angular/material/table";
import {Characters} from "./character";
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.css']
})
export class GameplayComponent implements OnInit {

  displayedColumns = ["id", "name", "username","action"];
  characterDataSource: MatTableDataSource<Characters>;

  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  constructor(private router: Router, private _service:CharacterService) { }

  ngOnInit() {
      this.characterDataSource = new MatTableDataSource<Characters>();
      this._service.fetchCharacterList().subscribe(data=>{
        this.characterDataSource.data = data;
        return data;
      });

  }

  ngAfterViewInit() {
    this.characterDataSource.sort = this.sort;
    this.characterDataSource.paginator = this.paginator;
  }


  goToAddCharacter(){
    this.router.navigate(['add']);
  }





}
