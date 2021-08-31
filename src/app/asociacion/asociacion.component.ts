import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Labor } from '../Models/Labor';
import { AsociacionService } from '../service/asociacion.service';
import { ModelAsociacionComponent } from './model-asociacion/model-asociacion.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-asociacion',
  templateUrl: './asociacion.component.html',
  styleUrls: ['./asociacion.component.css']
})
export class AsociacionComponent implements OnInit {

  displayedColumns = ['Id','Nombre','Asenso','Editar'];
  dataSource! : MatTableDataSource<Labor>;
  //works: Labor[] = []; 

  filtro: FormGroup;
  
 
  
  
  constructor(private dialogo:MatDialog ,private serviciosWorks:AsociacionService,private fb: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute) { 


      this.filtro = this.fb.group({
        dato: ['', Validators.required]
    
      })
    }




  ngOnInit(): void {

    this.serviciosWorks.updateLabor.subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
   })

    this.serviciosWorks.lista().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })
  }

  onModal(work?:Labor){
    
    let labor = work!=null ? work: new Labor();
    this.dialogo.open(ModelAsociacionComponent,{
       width:'200px',
       height:'299px',
       data:labor
    })

    console.log(work);

 }


  filtrar(): void{   
   
    this.serviciosWorks.detalleForName(this.filtro.get('dato')?.value).subscribe(
      data => {
          
           alert("Nombre de labor: "+data.nombre +"  Posibilidad de asenso: "+data.asenso);
      },
      err => {
        console.log(err);
      }
    );
    
  }
  
  


  /*cargarTrabajos(): void {
    this.serviciosWorks.lista().subscribe(
      data => {
        this.works = data;
      },
      err => {
        console.log(err);
      }
    );
  }*//**MANERA ANTERIOR DE CARGAR DATOS*/

  borrar(id: number) { alert("Probando... "+id)}

}

