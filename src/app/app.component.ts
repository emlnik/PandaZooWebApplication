import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pandica Zoo';

  constructor(private router: Router) {
  }

  sessionValid: boolean;
  loggedUser: User;

  ngOnInit(): void {
    if (localStorage.getItem("user") == null) {
      this.sessionValid = false;
      this.loggedUser = null;
    }
    else {
      this.sessionValid = true;
      this.loggedUser = JSON.parse(localStorage.getItem("user"));
    }
  }  

  logout() {
    localStorage.setItem("user", null);
    this.loggedUser = null;
    this.sessionValid = false;
    this.router.navigate(["login"]);
  }

  home() {
    if (this.loggedUser != null) this.router.navigate(["home"]);
  }
  
}