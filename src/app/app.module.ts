import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RickAndMortyService } from './rick-and-morty.service';
import { RouterModule, Routes } from '@angular/router';
import { Pregunta1Component } from './componente-menu/pregunta1/pregunta1.component';
import { Pregunta2Component } from './componente-menu/pregunta2/pregunta2.component';
import { Pregunta3Component } from './componente-menu/pregunta3/pregunta3.component';

@NgModule({
declarations: [Pregunta1Component, Pregunta2Component, ],

  imports: [BrowserModule, FormsModule],
  providers: [RickAndMortyService],
  bootstrap: [Pregunta1Component,Pregunta2Component,Pregunta3Component],

})


export class AppModule {}