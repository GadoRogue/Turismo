import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private service:ServicioService, private router: Router) { }

  ngOnInit(): void {
  }

  enviar(tipo){
    localStorage.setItem("tipo",tipo);
    this.router.navigate(['/lista']);
  }

}

