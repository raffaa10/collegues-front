import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C2Component } from './c2/c2.component';
import { CollegueComponent } from './collegue/collegue.component';

@NgModule({
  // la liste des composants graphiques du module
  declarations: [
    AppComponent,
    C2Component,
    CollegueComponent
  ],
  // dépendance vers d'autres modules
  imports: [
    BrowserModule
  ],
  // la liste des services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
