import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Labor } from '../Models/Labor';

@Injectable({
  providedIn: 'root'
})
export class AsociacionService {

  updateLabor = new Subject<Labor[]>();
  
  urlWorks = 'http://localhost:9000/trabajos/';

  constructor(private httpClient: HttpClient) { }

   public lista(): Observable<Labor[]> {
        return this.httpClient.get<Labor[]>(this.urlWorks + 'lista');
   }

  public detalles(id: number): Observable<Labor> {
        return this.httpClient.get<Labor>(this.urlWorks + `detalles/${id}`);
  }

  public detalleForName(nombre: string): Observable<Labor> {
        return this.httpClient.get<Labor>(this.urlWorks + `detallesforName/${nombre}`);
  }

  public save(people: Labor): Observable<any> {
         return this.httpClient.post<any>(this.urlWorks + 'add', people);
  }

  public update(id: number, work: Labor): Observable<any> {
    return this.httpClient.put<any>(this.urlWorks + `update/${id}`, work);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.urlWorks + `delete/${id}`);
  }

}
