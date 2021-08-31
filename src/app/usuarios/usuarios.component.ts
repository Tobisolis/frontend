import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuarios } from '../Models/usuarios';
import {ServiciosService } from '../service/servicios-usuarios.service'
import { DialogUsuariosComponent } from './dialog-usuarios/dialog-usuarios.component';
import { ModelUsuariosComponent } from './model-usuarios/model-usuarios.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: 'usuarios.component.html',
  styleUrls: ['usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users: Usuarios[] = []; 

  displayedColumns = ['Id','Nombre','Celular','Correo','Labor','Editar','Eliminar'];
  dataSource! : MatTableDataSource<Usuarios>;
  //works: Labor[] = []; 

  filtro: FormGroup;
  
 
  
  
  constructor(private dialogo:MatDialog ,private serviciosUsuers:ServiciosService,private fb: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute) { 


      this.filtro = this.fb.group({
        dato: ['', Validators.required]
    
      })
    }




  ngOnInit(): void {

    this.serviciosUsuers.updateUsuarios.subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
   })

    this.serviciosUsuers.lista().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })
  }

  onModal(users?:Usuarios){
    
    let people = users!=null ? users: new Usuarios();
    this.dialogo.open(ModelUsuariosComponent,{
       width:'200px',
       height:'299px',
       data:people
    })

    console.log(users);

 }

    onDelete(id:number){
      let dialoRef = this.dialogo.open(DialogUsuariosComponent,{
          disableClose:true
      });
    
     dialoRef.afterClosed().subscribe(estado=>{
    if(estado){
      this.serviciosUsuers.delete(id).subscribe(()=>{
        this.serviciosUsuers.lista().subscribe(data=>{
          this.dataSource = new MatTableDataSource(data);

          })
        })
      }
    }) 
 }


  filtrar(): void{   

    var info=this.filtro.get('dato')?.value; 

    this.serviciosUsuers.detalleForName(info).subscribe(
      data => {
          
           alert("Nombre de usuario: "+data.nombre +"  Asociacion laboral: "+data.trabajo.nombre);
           console.log(data+"----");
      },
      err => {
        console.log(err);
      }
    );
    
  }


}
