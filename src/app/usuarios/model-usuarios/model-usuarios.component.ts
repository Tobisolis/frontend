import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModelAsociacionComponent } from 'src/app/asociacion/model-asociacion/model-asociacion.component';
import { Labor } from 'src/app/Models/Labor';
import { Usuarios } from 'src/app/Models/usuarios';
import { AsociacionService } from 'src/app/service/asociacion.service';
import { ServiciosService } from 'src/app/service/servicios-usuarios.service';

@Component({
  selector: 'app-model-usuarios',
  templateUrl: './model-usuarios.component.html',
  styleUrls: ['./model-usuarios.component.css']
})
export class ModelUsuariosComponent implements OnInit {

 
  user:Usuarios;
  work:Labor[];
      

  constructor(private userService:ServiciosService, @Inject(MAT_DIALOG_DATA) private data:Usuarios,
              private dialogo: MatDialogRef<ModelAsociacionComponent>,private serviciosWorks:AsociacionService) { }

  ngOnInit(): void {
    
    this.user = new Usuarios();
    this.user.id = this.data.id;
    this.user.nombre = this.data.nombre;
    this.user.celular = this.data.celular;
    this.user.correo = this.data.correo;
    this.user.trabajo= this.data.trabajo;

    this.serviciosWorks.lista().subscribe(data=>{
      this.work=data;
    })
  }

  ok(){
    this.userService.update(this.user.id , this.user).subscribe(()=>{
      return this.userService.lista().subscribe(data=>{
        this.userService.updateUsuarios.next(data);
     })
   });
    this.cancel();
    console.log(this.user.id);
    console.log(this.user);
  }
  cancel(){
    this.dialogo.close();
  }


}
