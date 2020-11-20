import {Route} from '@angular/compiler/src/core';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ServicioService} from '../servicio.service';
import {Place} from '../place';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  places: Place[];


  constructor(private service: ServicioService, private router: Router) {
  }

  ngOnInit(): void {
    this.places_list();
  }

  places_list() {
    this.service.ListaplacesGet().subscribe(
      data => {
        this.places = data;
      });
  }

  place(id) {
    localStorage.setItem("id", id);
    this.router.navigate(['/detalle']);
  }


}
