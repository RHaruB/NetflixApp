import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IGeneros } from 'src/app/Interfaces/generos';
import { PeliculasService } from 'src/app/Services/peliculas.service';

@Component({
  selector: 'app-set-genero',
  templateUrl: './set-genero.component.html',
  styleUrls: ['./set-genero.component.css']
})
export class SetGeneroComponent implements OnInit {

  constructor(
    private ppeliculaService: PeliculasService,
    private router: Router,
    public dialogRef: MatDialogRef<SetGeneroComponent>,
  ) { }
  genero : IGeneros = {
    Descripcion : ""
  } 
  descripcion:string = "";
  ngOnInit(): void {
  }

  setGenero(){
    this.genero.Descripcion = this.descripcion;
    this.ppeliculaService.setGenero(this.genero).subscribe(resp => {
      console.log(resp)
      if (resp.ejecutado) {
        console.log("funciono ")
        alert("Registrado");
        this.dialogRef.close()
      }
      else {
        alert("No se pudo registrar la persona");
      }

    });
  }

}
