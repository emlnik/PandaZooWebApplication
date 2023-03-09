import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { Zahtev } from '../model/zahtev.model';

@Component({
  selector: 'app-obavestenja',
  templateUrl: './obavestenja.component.html',
  styleUrls: ['./obavestenja.component.css']
})
export class ObavestenjaComponent implements OnInit {

  constructor(private router:Router) { }
  zahtevi:Zahtev[];
  zahteviMoji:Zahtev[]=[];
  user:User;

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem("user"));
    this.zahtevi=JSON.parse(localStorage.getItem("zahtevi"));
    this.zahtevi.forEach(z=>{
      if(z.kupac==this.user.username){
        if(z.status=='approved'|| z.status=='rejected'){
          this.zahteviMoji.push(z);
        }
      }
    })
    console.log(this.zahteviMoji);
    localStorage.setItem("zahteviMoji",JSON.stringify(this.zahteviMoji));
  }

}
