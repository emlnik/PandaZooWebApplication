import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Desavanja } from '../model/desavanja.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-desavanja',
  templateUrl: './desavanja.component.html',
  styleUrls: ['./desavanja.component.css']
})
export class DesavanjaComponent implements OnInit {

  constructor(private router: Router) { }

  user:User;

  desavanje:Desavanja;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    if (this.user == null) this.router.navigate(["login"]);
    this.desavanje = JSON.parse(localStorage.getItem("desavanje"));
    if (this.desavanje == null) this.router.navigate(["login"]);
  }


 
  setRating(rating) {
    let rated1 = false;
    let ratings1 = JSON.parse(localStorage.getItem("rated1"));
    if (ratings1 != null) {
      ratings1.forEach(rating => {
        if (rating.username == this.user.username && rating.animal == this.desavanje.title) {
          rated1 = true;
          return;
        }
      })
    }
    if (rated1) return;
   // if (this.desavanje.likes > rating && this.desavanje.likes >= 0.1) this.desavanje.likes -= 0.1;
   // else if (this.desavanje.likes < rating && this.desavanje.likes <= 4.9) this.desavanje.likes += 0.1;
    this.desavanje.likes=this.desavanje.likes+1;
    if (localStorage.getItem("rated1") == null) {
      let rated1 = [{
        username: this.user.username,
        animal: this.desavanje.title,
        rate: rating
      }]
      localStorage.setItem("rated1", JSON.stringify(rated1));
    }
    else {
      let ratings1 = JSON.parse(localStorage.getItem("rated1"));
      let rated1 = {
        username: this.user.username,
        animal: this.desavanje.title,
        rate: rating
      }
      ratings1.push(rated1);
      localStorage.setItem("rated1", JSON.stringify(ratings1));
    }    
    this.saveState();
  }
  saveState() {
    let allDesavanja:Desavanja[] = JSON.parse(localStorage.getItem("allDesavanja"));
    let updatedDesavanja: Desavanja[] = [];
    allDesavanja.forEach(a => {
      if (a.title == this.desavanje.title) {
        updatedDesavanja.push(this.desavanje);
      }
      else {
        updatedDesavanja.push(a);
      }
    // allAnimals.push(this.animal);
    });
    localStorage.setItem("allDesavanja", JSON.stringify(updatedDesavanja));
    localStorage.setItem("desavanje", JSON.stringify(this.desavanje));
  }

}
