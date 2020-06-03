import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



interface Interests {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {
  selectedValue: string;

  errorExists = false;
  errorText = "";

  interests: Interests[] = [
    {value: 'pc-games', viewValue: 'PC Games'},
    {value: 'card-games', viewValue: 'Card Games'},
    {value: 'anime-panel', viewValue: 'Anime Panel'},
    {value: 'gaming-tournaments', viewValue: 'Gaming Tournaments'}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
