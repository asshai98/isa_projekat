import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {CampaignService} from "../campaigns/campaign.service";
import {HistoryService} from "./history.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  displayedColumns = ["id", "campaign_name", "date","lasted", "universe", "action"];
  historyDataSource: MatTableDataSource<History>

  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(private router: Router, private _service:HistoryService) { }

  ngOnInit() {
    this.historyDataSource = new MatTableDataSource<History>();
    this._service.fetchHistoryList().subscribe(data => {
      this.historyDataSource.data = data;
      return data;
    });

  }

  ngAfterViewInit() {
    this.historyDataSource.sort = this.sort;
    this.historyDataSource.paginator = this.paginator;
  }

  rate(id:number){}


}
