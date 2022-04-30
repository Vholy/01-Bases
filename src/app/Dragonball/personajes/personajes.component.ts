import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../Interfaces/Dragonball.interface';
import { DragonballService } from '../Services/Dragonball.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent  {

  constructor(private DragonballService: DragonballService){}

  get personajes()  {
    return this.DragonballService.personajes;
  }

  

}
