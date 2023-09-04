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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardPeliculaComponent,
    NavComponent,
    RegisterComponent,
    GetAllPersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
