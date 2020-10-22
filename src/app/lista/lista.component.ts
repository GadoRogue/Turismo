import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { Lugar } from '../lugar';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
  lugar: Lugar[];

  constructor(private service:ServicioService, private router: Router) { }

  ngOnInit(): void {
  }
  Lista(){
    this.service.ListalugaresGet().subscribe( //la lista de modelo 
      data => this.lugar=data);
  }

}
