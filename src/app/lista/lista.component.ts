import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { Lugar } from '../lugar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  lugares: Lugar[];

  constructor(private service:ServicioService, private router: Router) { }

  ngOnInit(): void {
    this.service.ListalugaresGet(localStorage.getItem("tipo")).subscribe( //la lista de modelo 
      data => {
        this.lugares=data
        if(this.lugares.length == 0)
        {
          Swal.fire({
            position: 'top',
            icon: 'warning',
            title: 'Lo sentimos, aun no tenemos datos sobre este tipo de turismo',
            showConfirmButton: false,
            timer: 3000
          })
        }
        console.log(this.lugares);

      });
    
  }


  detalle(id){
    localStorage.setItem("id",id);
    this.router.navigate(['/detalle']);
  }
  
}
