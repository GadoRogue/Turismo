import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { GastronomicoComponent } from './gastronomico/gastronomico.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
const Routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'contactanos',
    component: ContactanosComponent,
  },
  {
    path: 'gastronomico',
    component: GastronomicoComponent,
  },
  {
    path: 'encabezado',
    component: EncabezadoComponent,
  }, 
  {
    path: 'piepagina',
    component: PiepaginaComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
