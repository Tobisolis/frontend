import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-usuarios',
  templateUrl: './dialog-usuarios.component.html',
  styleUrls: ['./dialog-usuarios.component.css']
})
export class DialogUsuariosComponent implements OnInit {

  constructor(public dialogo:MatDialogRef<DialogUsuariosComponent>) { }

  ngOnInit(): void {
  }


  onEliminar(){

    this.dialogo.close(true);
 }

 onCancel(){

    this.dialogo.close(false); 
 }
}
