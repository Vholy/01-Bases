import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './Heroes/Heroes.module';
import { ContadorModule } from './Contadores/Contador.module';
import { DragonballModule } from './Dragonball/Dragonball.module';
;

@NgModule({
  declarations: [
    AppComponent,
    

   
  ],
  imports: [ 
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DragonballModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
