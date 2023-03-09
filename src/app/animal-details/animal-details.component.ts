import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { Animal } from '../model/animal.model';
import { Comment } from '../model/comment.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  user: User;
  comment: string;
  animal: Animal;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    if (this.user == null) this.router.navigate(["login"]);
    this.animal = JSON.parse(localStorage.getItem("animal"));
    if (this.animal == null) this.router.navigate(["login"]);
  }

 
  setComment() {
    let com = {
      name: this.user.firstName + " " + this.user.lastName,
      comment: this.comment
    };
    this.animal.comments.push(com);
    this.comment = "";
   this.saveState();
  }

  saveState() {
    let allAnimals:Animal[] = JSON.parse(localStorage.getItem("allAnimals"));
    let updatedAnimals: Animal[] = [];
    allAnimals.forEach(a => {
      if (a.name == this.animal.name) {
        updatedAnimals.push(this.animal);
      }
      else {
        updatedAnimals.push(a);
      }
    // allAnimals.push(this.animal);
    });
    localStorage.setItem("allAnimals", JSON.stringify(updatedAnimals));
    localStorage.setItem("animal", JSON.stringify(this.animal));
  }

}
