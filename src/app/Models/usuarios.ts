import { Labor } from "./Labor";

export class Usuarios {

  id:number=0;	
  nombre:string="";
  celular:number=0;
  correo:string="";
  trabajo:Labor =new Labor;    
    
	public Usuarios(id:number,nombre:string, celular:number, correo:string, trabajo:Labor) {
	    this.id=id;
		this.nombre = nombre;
		this.celular = celular;
		this.correo = correo;
		this.trabajo = trabajo;
	}
}
