import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CardPeliculaComponent } from './Components/card-pelicula/card-pelicula.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { NavComponent } from './Components/nav/nav.component';
import { RegisterComponent } from './Components/Persona/register/register.component';
import { GetAllPersonasComponent } from './Components/Persona/get-all-personas/get-all-personas.component';
import { SetGeneroComponent } from './Components/Persona/set-genero/set-genero.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule}from '@angular/material/dialog';
import { HttpClientModule } from "@angular/common/http";




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardPeliculaComponent,
    NavComponent,
    RegisterComponent,
    GetAllPersonasComponent,
    SetGeneroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
