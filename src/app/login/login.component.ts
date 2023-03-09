import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allUsers } from '../data/users';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;
  msg: string;
  allUsers: User[];

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem("user")) != null) {
      this.router.navigate(["home"]);
    }
   if (localStorage.getItem("allUsers") == "") {
      this.allUsers = allUsers;
      console.log(this.allUsers);
     localStorage.setItem("allUsers", JSON.stringify(this.allUsers)); 
   }
    else {
     this.allUsers = JSON.parse(localStorage.getItem("allUsers"));
}    
    this.username = "";
    this.password = "";
  }

  login() {
    this.msg = "";
    if (this.username == "" || this.password == "") {
      this.msg = "Morate popuniti sva polja.";
      return;
    }
    let user = (this.allUsers|| []).find(user => user.username == this.username && user.password == this.password);
    if (user == null) {
      this.msg = "Neispravni kredencijali.";
      return;
    }
    localStorage.setItem('user', JSON.stringify(user));
    window.location.reload();
  }

}
