import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/Persona/register/register.component';
import { GetAllPersonasComponent } from './Components/Persona/get-all-personas/get-all-personas.component';
import { SetGeneroComponent } from './Components/Persona/set-genero/set-genero.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'SetPersona',
    component: RegisterComponent
  },
  {
    path: 'SetGenero',
    component: SetGeneroComponent
  },
  {
    path: 'GetAllPersona',
    component: GetAllPersonasComponent
  },
  
  {path:"**",redirectTo : "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
