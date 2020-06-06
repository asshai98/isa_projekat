import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {CampaignService} from "../campaigns/campaign.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  displayedColumns = ["id", "name", "date","lasted", "universe"];
  historyDataSource: MatTableDataSource<History>

  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(private router: Router, private _service:CampaignService) { }

  ngOnInit() {
    this.historyDataSource = new MatTableDataSource<History>();
    this._service.fetchHistoryList().subscribe(data => {
      this.historyDataSource.data = data;
      return data;
    });

  }

  ngAfterViewInit() {
    this.campaignsDataSource.sort = this.sort;
    this.campaignsDataSource.paginator = this.paginator;
  }


}
