import { Component, OnInit, ViewChild, ElementRef, NgZone, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { Place } from '../place';
import { FormControl } from '@angular/forms';
import { AgmMap, MapsAPILoader } from '@agm/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  place= new Place;
  mylat: number;
  mylng: number;
  zoom: number = 18;
  mapTyoeId: string = 'hybrid';
  origin:any;
  destination:any;
  look: boolean = false;

  constructor(private service:ServicioService, private router: Router) { }

  ngOnInit(): void {
    this.service.LugarGet(localStorage.getItem("id")).subscribe( //la lista de modelo 
      data => {
        this.place=data
      });
  }

  ruta(){
    navigator.geolocation.getCurrentPosition(position =>{
      this.mylat =position.coords.latitude;
      this.mylng =position.coords.longitude;
      this.origin ={lat: this.mylat, lng: this.mylng};
      this.destination = {lat: this.place.latitud , lng: this.place.longitud};
      this.look = true;
    })
  }

}
