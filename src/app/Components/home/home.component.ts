import { Component, OnInit } from '@angular/core';
import { SetGeneroComponent } from '../Persona/set-genero/set-genero.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  CrearGenero(){
    const dialogRef = this.matDialog.open(SetGeneroComponent, {
      width: '800px',
      panelClass: 'fondo',
      data: null
    })
    dialogRef.afterClosed().subscribe(() => {
 
    });

  }

}
