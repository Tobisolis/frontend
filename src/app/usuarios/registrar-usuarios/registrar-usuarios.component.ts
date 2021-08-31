import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuarios } from 'src/app/Models/usuarios';
import { ServiciosService } from 'src/app/service/servicios-usuarios.service';

@Component({
  selector: 'app-registrar-usuarios',
  templateUrl: './registrar-usuarios.component.html',
  styleUrls: ['./registrar-usuarios.component.css']
})
export class RegistrarUsuariosComponent implements OnInit {

  user:Usuarios;
  Agg: FormGroup;
    

    constructor(private fb: FormBuilder,private serviciosUsuers:ServiciosService ,
      private router: Router,
      private aRoute: ActivatedRoute){

      this.Agg = this.fb.group({
        nombreu: ['', Validators.required],
        cell: ['', Validators.required],
        correo: ['', Validators.required],
        codigo: ['', Validators.required],
      
      });
      
     }

    ngOnInit(): void {


    }

    AddU(){
        this.user = new Usuarios();
        this.user.nombre=this.Agg.get('nombreu')?.value,
        this.user.celular=this.Agg.get('cell')?.value,
        this.user.correo=this.Agg.get('correo')?.value,
        this.user.trabajo=this.Agg.get('codigo')?.value

        console.log(this.user.nombre+"---"+this.user.celular+"------"+this.Agg.get('codigo')?.value+"-------"+this.user);

        if(this.user.nombre!=""){
        this.serviciosUsuers.save(this.user).subscribe(data=>{

           alert("Guardado...");
           this.router.navigate(['/reigstrar-usuarios']);
        });

       }else{

       }
      
      //console.log(this.user.Usuario+"------"+this.Agg.get('codigo')?.value);
    }

}
