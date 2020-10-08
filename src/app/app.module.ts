import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CulturalComponent } from './cultural/cultural.component';
import { GastronomicoComponent } from './gastronomico/gastronomico.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CulturalComponent,
    GastronomicoComponent,
    ContactanosComponent,
    NosotrosComponent,
    EncabezadoComponent,
    PiepaginaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
