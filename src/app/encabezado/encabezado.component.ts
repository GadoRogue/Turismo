import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { SimpleChanges } from '@angular/core';
import { Lugar } from '../lugar';
import { ListaComponent } from '../lista/lista.component';

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
    if(location.toString() == "http://localhost:4200/lista"){
      ListaComponent.refresh();
    }

  }

}

