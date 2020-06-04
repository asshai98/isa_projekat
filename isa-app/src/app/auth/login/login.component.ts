import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {UserService} from "../user.service";
import {Users} from "../user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new Users();

  errorExists = false;
  errorText = "";
  constructor(private router: Router, private _service:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
      this._service.loginUserFromRemote(this.user).subscribe(
        data => console.log("Reponse recieved!"),
        error => console.log("Exeption occured")
      );
      this.errorExists = false;
      this.router.navigate(['welcome']);
  }

  redirect(){
    this.router.navigate(['register']);
  }
}
