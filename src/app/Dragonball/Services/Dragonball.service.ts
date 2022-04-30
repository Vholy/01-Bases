import { Injectable } from "@angular/core";
import { Personaje } from "../Interfaces/Dragonball.interface";

@Injectable()
export class DragonballService{

   private _personajes: Personaje[] =[

        {nombre:'Goku', poder:15000},
        {nombre: 'Vegetta', poder: 8500},
           
    ];

get personajes (): Personaje[] {
    return [...this._personajes]
}

agregarPJ(argumento: Personaje) {
    this._personajes.push (argumento)
  }






}