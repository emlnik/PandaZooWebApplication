import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private router: Router) { }

  user: User;
  oldPassword: string;
  newPassword: string;
  newPass2: string;
  errorMessage: string;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    if (this.user == null) this.router.navigate(["login"]);
    this.oldPassword = "";
    this.newPassword = "";
    this.newPass2 = "";
  }

  changePassword() {
    this.errorMessage = "";
    if (this.oldPassword == "" || this.newPassword == "" || this.newPass2 == "") {
      this.errorMessage = "Morate uneti sve podatke!"
      return;
    }
    if (this.newPassword != this.newPass2) {
      this.errorMessage = "Lozinke se ne poklapaju!";
      return;
    }
    if (this.oldPassword != this.user.password) {
      this.errorMessage = "Neispravna lozinka!";
      return;
    }
    this.user.password = this.newPassword;
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
    this.router.navigate([""]);
  }

}
