import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../Models/usuarios';
import {ServiciosService } from '../service/servicios-usuarios.service'

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  users: Usuarios[] = []; 

  constructor(private serviciosUsers:ServiciosService) { }
 
  ngOnInit() {
    this.cargarUsuarios();
    
  }

      cargarUsuarios(): void {
        this.serviciosUsers.lista().subscribe(
          data => {
            this.users = data;
          },
          err => {
            console.log(err);
          }
        );
      }

      borrar(id: number) { alert("Borrar el codigo "+id)}
      /*
      borrar(id: number) {
        this.serviciosUsers.delete(id).subscribe(
          data => {
            this.toastr.success('usuario Eliminado', 'OK', {
              timeOut: 3000, positionClass: 'toast-top-center'
            });
            this.cargarUsuarios();
          },
          err => {
            this.toastr.error(err.error.mensaje, 'Fail', {
              timeOut: 3000,  positionClass: 'toast-top-center',
            });
          }
        );
      }*/


}
