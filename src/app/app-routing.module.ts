import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CulturalComponent } from './cultural/cultural.component';
import { GastronomicoComponent } from './gastronomico/gastronomico.component';
const Routes: Routes = [
  {
    path: 'Cultural',
    component: CulturalComponent,
  },
  {
    path: 'Gastronomico',
    component: GastronomicoComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(Routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
