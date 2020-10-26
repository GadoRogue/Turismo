import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { Place } from '../place';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  place= new Place;
  mylat: number;
  mylng: number;
  zoom: number = 15;
  mapTyoeId: string = 'hybrid';
  
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
      this.zoom =12;
    })

  }

}
