import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {Users} from "../user";
import {UserService} from "../user.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {

  user = new Users();

  errorExists = false;
  errorText = "";

  constructor(private router: Router, private _service:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this._service.registerUserFromRemote(this.user).subscribe(
      data => console.log("Reponse recieved!"),
      error => console.log("Exeption occured")
    );
    this.errorExists = false;
    this.router.navigate(['welcome']);
  }

}
