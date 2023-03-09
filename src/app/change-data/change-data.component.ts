import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-change-data',
  templateUrl: './change-data.component.html',
  styleUrls: ['./change-data.component.css']
})
export class ChangeDataComponent implements OnInit {

  constructor(private router: Router) { }

  user: User;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  msg: string;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    if (this.user == null) this.router.navigate(["login"]);
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.address = this.user.address;
    this.phone = this.user.phone;
  }

  changeData() {
    this.msg = "";
    if (this.firstName == "" || this.lastName == "" || this.address == "" || this.phone == "") {
      this.msg = "Morate uneti sve podatke."
      return;
    }
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.address = this.address;
    this.user.phone = this.phone;
    localStorage.setItem("user", JSON.stringify(this.user));
    let allUsers:User[] = JSON.parse(localStorage.getItem("allUsers"));
    let updatedUsers: User[] = [];
    allUsers.forEach(user => {
      if (user.username == this.user.username) {
        updatedUsers.push(this.user);
      }
      else {
        updatedUsers.push(user);
      }
    });
    localStorage.setItem("allUsers", JSON.stringify(updatedUsers));
    this.router.navigate(["profile"]);
  }

}
