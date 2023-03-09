import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { Zahtev } from '../model/zahtev.model';

@Component({
  selector: 'app-kupovina',
  templateUrl: './kupovina.component.html',
  styleUrls: ['./kupovina.component.css']
})
export class KupovinaComponent implements OnInit {

  constructor(private router: Router) { }
  
  brojUlaznica:number;
  zahtevi:Zahtev[];
  username:string;
  brojDece:number;
  brojUlaznica1:number;
  brojUlaznica2:number;
  brojDece1:number;

  ngOnInit(): void {

    let user: User = JSON.parse(localStorage.getItem("user"));
    if (user == null) this.router.navigate(["login"]);
    if(this.zahtevi==null){
    this.zahtevi=[];
    }
    else{
      this.zahtevi=this.zahtevi=JSON.parse(localStorage.getItem("zahtevi"));
    }
    this.username=user.username;
  }
  kupiStandard(broj){
    this.brojUlaznica=broj;
      let zahtev={
        kupac:this.username,
        broj:broj,
        status:'pending',
        cena:this.brojUlaznica*600,
        tip:'standard'
      }
     // this.zahtevi=JSON.parse(localStorage.getItem("zahtevi"));
      this.zahtevi.push(zahtev);
      localStorage.setItem("zahtevi", JSON.stringify(this.zahtevi));
      alert("Primili smo Vas zahtev i uskoro cemo ga obraditi!");
  }
  kupiPorodicnu(broj1,broj2){
    this.brojUlaznica1=broj1;
    this.brojDece=broj2;
      let zahtev={
        kupac:this.username,
        broj:broj1,
        status:'pending',
        cena:this.brojUlaznica1*600-this.brojDece,
        tip:'porodicna'
      }
      this.zahtevi=JSON.parse(localStorage.getItem("zahtevi"));
      this.zahtevi.push(zahtev);
      localStorage.setItem("zahtevi", JSON.stringify(this.zahtevi));
      alert("Primili smo Vas zahtev i uskoro cemo ga obraditi!");
  }

  kupiMV(){
  
    let zahtev={
      kupac:this.username,
      broj:3,
      status:'pending',
      cena:1200,
      tip:'monkeyvalley'
    }
    this.zahtevi=JSON.parse(localStorage.getItem("zahtevi"));
    this.zahtevi.push(zahtev);
    localStorage.setItem("zahtevi", JSON.stringify(this.zahtevi));
    alert("Primili smo Vas zahtev i uskoro cemo ga obraditi!");
}

kupi(broj1,broj2){
  this.brojUlaznica2=broj1;
  this.brojDece1=broj2;
    let zahtev={
      kupac:this.username,
      broj:broj1,
      status:'pending',
      cena:300*(broj2)+600*(broj1-broj2),
      tip:'skolska'
    }
    this.zahtevi=JSON.parse(localStorage.getItem("zahtevi"));
    this.zahtevi.push(zahtev);
    localStorage.setItem("zahtevi", JSON.stringify(this.zahtevi));
    alert("Primili smo Vas zahtev i uskoro cemo ga obraditi!");
}

}
