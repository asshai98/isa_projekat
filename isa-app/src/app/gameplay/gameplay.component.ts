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

  doFilter(filterValue : string) {
    this.characterDataSource.filter = filterValue.trim().toLowerCase();
  }

  goToAddCharacter(){
    this.router.navigate(['add']);
  }

  goToEdit(id:number) {
    this.router.navigate(['edit', id]);
  }

  goToDetails(id:number){
    this.router.navigate(['character', id]);
  }


  deleteProduct(id:number){
      this._service.deleteCharactersById(id).subscribe(
        data=>{
          console.log("Success");
          //this.router.navigate(['gameplay']);
          this.ngOnInit();
        },
        error => console.log("Error")
      );
  }

}
