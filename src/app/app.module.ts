import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoRestauranteComponent } from './componentes/restaurantes/nuevo-restaurante/nuevo-restaurante.component';
import { NuevoRestauranteModule } from './componentes/restaurantes/nuevo-restaurante/nuevo-restaurante.module';

@NgModule({
  declarations: [
    AppComponent,
    NuevoRestauranteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NuevoRestauranteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
