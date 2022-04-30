import { Component } from '@angular/core';
import { Personaje } from '../Interfaces/Dragonball.interface';
import { DragonballService } from '../Services/Dragonball.service';
 


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})




export class MainPageComponent  {

  
 

  nuevo:Personaje = {
    nombre:'Roshi',
    poder: 123
  };

/* agregarPJ(argumento:Personaje){
this.personajes.push(argumento)} */

constructor(public DragonballService: DragonballService){

}
 
}
