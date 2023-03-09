import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { ChangeDataComponent } from './change-data/change-data.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DesavanjaComponent } from './desavanja/desavanja.component';
import { HomeComponent } from './home/home.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { KupovinaComponent } from './kupovina/kupovina.component';
import { LoginComponent } from './login/login.component';
import { ObavestenjaComponent } from './obavestenja/obavestenja.component';
import { PrikazZahtevaComponent } from './prikaz-zahteva/prikaz-zahteva.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'changeData', component: ChangeDataComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'addAnimal', component: AddAnimalComponent },
  { path: 'animalDetails', component: AnimalDetailsComponent },
  { path: 'desavanjaDetails', component: DesavanjaComponent },
  {path: 'kupovina', component: KupovinaComponent},
  {path:'zahtevi',component:PrikazZahtevaComponent},
  {path:'obavestenja',component:ObavestenjaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
