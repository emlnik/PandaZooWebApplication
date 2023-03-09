import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ChangeDataComponent } from './change-data/change-data.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { DesavanjaComponent } from './desavanja/desavanja.component';
import { KupovinaComponent } from './kupovina/kupovina.component';
import { PrikazZahtevaComponent } from './prikaz-zahteva/prikaz-zahteva.component';
import { ObavestenjaComponent } from './obavestenja/obavestenja.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    ChangeDataComponent,
    ChangePasswordComponent,
    AddAnimalComponent,
    AnimalDetailsComponent,
    KontaktComponent,
    DesavanjaComponent,
    KupovinaComponent,
    PrikazZahtevaComponent,
    ObavestenjaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
