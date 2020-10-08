import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CulturalComponent } from './cultural/cultural.component';
import { GastronomicoComponent } from './gastronomico/gastronomico.component';

@NgModule({
  declarations: [
    AppComponent,
    CulturalComponent,
    GastronomicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
