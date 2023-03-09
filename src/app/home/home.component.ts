import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allAnimals } from '../data/animals';
import { allDesavanja } from '../data/desavanja';
import { Animal } from '../model/animal.model';
import { Desavanja } from '../model/desavanja.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  user: User;
  allAnimals: Animal[];
  desavanja: Desavanja[];

  ngOnInit(): void {
    if (localStorage.getItem("allAnimals") == null) {
      this.allAnimals = allAnimals;
      localStorage.setItem("allAnimals", JSON.stringify(this.allAnimals));
    }
 else {
      this.allAnimals= JSON.parse(localStorage.getItem("allAnimals"));
    }    
    if (localStorage.getItem("allDesavanja") == null) {
      this.desavanja = allDesavanja;
     
     
    localStorage.setItem("allDesavanja", JSON.stringify(this.desavanja));
    }
    else {
      this.desavanja= JSON.parse(localStorage.getItem("allDesavanja"));
}  

    this.user = JSON.parse(localStorage.getItem("user"));
    if (this.user == null) this.router.navigate(["login"]);
  }

  prev() {
    document.getElementById('slider-container').scrollLeft -= 270;
  }

  prevDesavanje() {
    document.getElementById('desavanja-slider-container').scrollLeft -= 270;
  }

  next() {
    document.getElementById('slider-container').scrollLeft += 270;
  }

  nextDesavanje() {
    document.getElementById('desavanja-slider-container').scrollLeft += 270;
  }

  animalDetails(animal: Animal) {
    localStorage.setItem("animal", JSON.stringify(animal));
    this.router.navigate(["animalDetails"]);
  }
  desavanjaDetails(desavanje:Desavanja) {
    localStorage.setItem("desavanje", JSON.stringify(desavanje));
    this.router.navigate(["desavanjaDetails"]);
  }


}
