import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Lugar } from './lugar';
import { Place } from './place';
import { Contacto } from './contacto';

@Injectable({
  providedIn: 'root'
})

export class ServicioService {

  constructor(private _http: HttpClient) { }

  urllista="http://localhost:8080/lista";
  urldetalle="http://localhost:8080/detalle";
  urlcontactos="http://localhost:8080/contactanos";


  ListalugaresGet(tipo){
    return this._http.get<Lugar[]>(this.urllista+"/tipo/"+tipo);
  }

  LugarGet(id){
    return this._http.get<Place>(this.urldetalle+"/"+id);
  }

  SendContactoPost(contacto: Contacto ){
    return this._http.post<any>(this.urlcontactos+"/guardar", contacto);
  }
}
