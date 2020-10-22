import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lugar } from './lugar';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private _http: HttpClient) { }

  url="http://localhost:8080/lista";

  public listalugares(Lugar: (Lugar)): Observable<any> {
    return this._http.post<any>("http://localhost:8080/lista", Lugar);
  }

  ListalugaresGet(){
    return this._http.get<any>(this.url);
  }
}
