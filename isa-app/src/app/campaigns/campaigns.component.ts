import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Campaigns} from "./campaign";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {CampaignService} from "./campaign.service";

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {

  displayedColumns = ["id", "name", "description","starts_at", "ends_at", "action"];
  campaignsDataSource: MatTableDataSource<Campaigns>;



  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(private router: Router, private _service:CampaignService) { }

  ngOnInit(){
    this.campaignsDataSource = new MatTableDataSource<Campaigns>();
    this._service.fetchCampaignList().subscribe(data=>{
      this.campaignsDataSource.data = data;
      return data;
    });


  }

  doFilter(filterValue : string) {
    this.campaignsDataSource.filter = filterValue.trim().toLowerCase();
  }


  ngAfterViewInit() {
    this.campaignsDataSource.sort = this.sort;
    this.campaignsDataSource.paginator = this.paginator;
  }

  goToAddCampaign(){
    this.router.navigate(['campaigns/add']);
  }

  goToEdit(id:number){
    this.router.navigate(['campaigns/edit', id]);
  }

  deleteCampaign(id:number){
    this._service.deleteCampaignById(id).subscribe(
      data=>{
        console.log("Success");
        //this.router.navigate(['campaigns']);
        this.ngOnInit();
      },

      error => console.log("Error occured!")
    );
  }

}
