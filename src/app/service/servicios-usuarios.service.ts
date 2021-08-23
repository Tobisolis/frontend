import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../Models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  

      urlUsers = 'http://localhost:9000/usuarios/';

      constructor(private httpClient: HttpClient) { }

       public lista(): Observable<Usuarios[]> {
            return this.httpClient.get<Usuarios[]>(this.urlUsers + 'lista');
       }

      public detalles(id: number): Observable<Usuarios> {
            return this.httpClient.get<Usuarios>(this.urlUsers + `detalles/${id}`);
      }

      public detalleForName(nombre: string): Observable<Usuarios> {
            return this.httpClient.get<Usuarios>(this.urlUsers + `detallesforName/${nombre}`);
      }

      public save(people: Usuarios): Observable<any> {
             return this.httpClient.post<any>(this.urlUsers + 'add', people);
      }

      public update(id: number, people: Usuarios): Observable<any> {
        return this.httpClient.put<any>(this.urlUsers + `update/${id}`, people);
      }

      public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.urlUsers + `delete/${id}`);
      }

  
}
