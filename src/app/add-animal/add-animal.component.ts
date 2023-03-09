import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../model/animal.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

  constructor(private router: Router) { }

  name: string;
  image: string;
  description:string;
  msg: string;
  successMsg: string;

  ngOnInit(): void {
    let user: User = JSON.parse(localStorage.getItem("user"));
    if (user == null) this.router.navigate(["login"]);
    this.name = "";
    this.image = "";
    this.description="";

  }

  add() {
    this.msg = "";
    this.successMsg = "";
    if (this.name == "" || this.image == ""|| this.description=="") {
    this.msg = "Morate popuniti sva polja";
      return;
    }
    let a: Animal = new Animal();
    a.name = this.name;

    a.image = this.image;
    a.description=this.description;
   
    a.likes = 0;
    a.comments = null;
    let allAnimals: Animal[] = JSON.parse(localStorage.getItem("allAnimals"));
    allAnimals.push(a);
    localStorage.setItem("allAnimals", JSON.stringify(allAnimals));
    this.successMsg = "Uspesno ste dodali zivotinju";
  }

}
