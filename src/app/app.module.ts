import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InicioComponent} from './inicio/inicio.component';
import {GastronomicoComponent} from './gastronomico/gastronomico.component';
import {ContactanosComponent} from './contactanos/contactanos.component';
import {EncabezadoComponent} from './encabezado/encabezado.component';
import {PiepaginaComponent} from './piepagina/piepagina.component';
import {ListaComponent} from './lista/lista.component';
import {HttpClientModule} from '@angular/common/http';
import {DetalleComponent} from './detalle/detalle.component';
import {AgmCoreModule} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GastronomicoComponent,
    ContactanosComponent,
    EncabezadoComponent,
    PiepaginaComponent,
    ListaComponent,
    DetalleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDc8swYy45Y-ToVKrGMklbGD2o7av1lXBg'
    }),
    AgmDirectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
