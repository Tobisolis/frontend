import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Labor } from 'src/app/Models/Labor';
import { AsociacionService } from 'src/app/service/asociacion.service';


@Component({
  selector: 'app-model-asociacion',
  templateUrl: './model-asociacion.component.html',
  styleUrls: ['./model-asociacion.component.css']
})
export class ModelAsociacionComponent implements OnInit {

      trabajo:Labor;
      

      constructor(private laborService:AsociacionService, @Inject(MAT_DIALOG_DATA) private data:Labor,
                  private dialogo: MatDialogRef<ModelAsociacionComponent>) { }

      ngOnInit(): void {
        
        this.trabajo = new Labor();
        this.trabajo.id = this.data.id;
        this.trabajo.nombre = this.data.nombre;
        this.trabajo.asenso = this.data.asenso;
      }

      ok(){
        this.laborService.update(this.trabajo.id , this.trabajo).subscribe(()=>{
          return this.laborService.lista().subscribe(data=>{
            this.laborService.updateLabor.next(data);
         })
       });
        this.cancel();
        console.log(this.trabajo.id);
        console.log(this.trabajo);
      }
      cancel(){
        this.dialogo.close();
      }

}
