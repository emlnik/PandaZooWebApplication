import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  user: User;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    if (this.user == null) this.router.navigate(["login"]);
  }

  changeData() {
    this.router.navigate(["changeData"]);
  }

  changePassword() {
    this.router.navigate(["changePassword"]);
  }

}
