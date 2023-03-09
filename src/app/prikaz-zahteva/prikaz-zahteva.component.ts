import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Zahtev } from '../model/zahtev.model';

@Component({
  selector: 'app-prikaz-zahteva',
  templateUrl: './prikaz-zahteva.component.html',
  styleUrls: ['./prikaz-zahteva.component.css']
})
export class PrikazZahtevaComponent implements OnInit {

  constructor(private router: Router) { }

  zahtevi:Zahtev[];
  zahteviPending:Zahtev[]=[];
  zahtev:Zahtev;


  ngOnInit(): void {
    this.zahtevi=JSON.parse(localStorage.getItem("zahtevi"));
    this.zahtevi.forEach(z=>{
      if(z.status=='pending'){
        console.log(z);
        this.zahteviPending.push(z);
      }
    });
    console.log(this.zahteviPending);
  localStorage.setItem("zahteviPending",JSON.stringify(this.zahteviPending));
  }

  odobri(z){
   this.zahtev=z;
   this.zahtev.status="approved";
   this.saveState();
  }
  
  odbij(z){
    this.zahtev=z;
    this.zahtev.status="rejected";
    this.saveState();
  }
  saveState() {
    let allZahtevi:Zahtev[] = JSON.parse(localStorage.getItem("zahtevi"));
    let updatedZahtevi: Zahtev[] = [];
    allZahtevi.forEach(z => {
      if (z.broj==this.zahtev.broj && z.cena==this.zahtev.cena && z.kupac==this.zahtev.kupac && z.tip==this.zahtev.tip) {
        updatedZahtevi.push(this.zahtev);
      }
      else {
        updatedZahtevi.push(z);
      }
    });
    localStorage.setItem("zahtevi", JSON.stringify(updatedZahtevi));
   
  }


}
