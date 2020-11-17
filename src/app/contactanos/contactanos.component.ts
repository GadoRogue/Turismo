import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { Contacto } from '../contacto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  constructor(private service:ServicioService, private router: Router) { }

  contacto = new Contacto();
    msg = '';

  ngOnInit(): void {


    Swal.fire({
      title: 'Registra tu lugar a travez de telegram',
      showCancelButton: true,
      confirmButtonText: 'Si',
      showLoaderOnConfirm: true
    })
    
   
  }

  savecontacto(){
    this.contacto = this.contacto;
  }

  send(){
    this.service.SendContactoPost(this.contacto).subscribe(
      data => {
        this.msg = data;
        Swal.fire({
          title: 'Tus datos han sido enviados',
          width: 600,
          padding: '3em',
          background: '#fff url(/images/trees.png)',
          backdrop: `
            rgb(0, 128, 0, 0.4)
            left top
            no-repeat
          `
        })

        this.router.navigate(['/inicio'])
      },
      error =>{
        console.log("exception ocurred ",error.error);
        this.msg = error.error;
          Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Por favor envianos de nuevo tus datos',
          showConfirmButton: false,
          timer: 1500
        })
        }
    )
  }

}
