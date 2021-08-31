import { Component, OnInit } from '@angular/core';
import { Labor } from 'src/app/Models/Labor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsociacionService } from 'src/app/service/asociacion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-asociacion',
  templateUrl: './registrar-asociacion.component.html',
  styleUrls: ['./registrar-asociacion.component.css']
})
export class RegistrarAsociacionComponent implements OnInit {

    trabajo:Labor;
    Add: FormGroup;
    

    constructor(private fb: FormBuilder,private laborService:AsociacionService ,
      private router: Router,
      private aRoute: ActivatedRoute){

      this.Add = this.fb.group({
        a: ['', Validators.required],
        p: ['', Validators.required]
      
      });
      
     }

    ngOnInit(): void {


    }

    AddT(){
        this.trabajo = new Labor();
        this.trabajo.nombre=this.Add.get('a')?.value,
        this.trabajo.asenso=this.Add.get('p')?.value

        if(this.trabajo.nombre!=""){
        this.laborService.save(this.trabajo).subscribe(data=>{

           alert("Guardado...");
           this.router.navigate(['/']);
        });

       }else{

       }
      
      console.log(this.trabajo);
    }

}
