import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SuccessComponent>) { }

  ngOnInit(): void {
  }

  onClick() {
    this.dialogRef.close();
  }

}
