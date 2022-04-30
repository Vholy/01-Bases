import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personaje } from '../Interfaces/Dragonball.interface';
import { MainPageComponent } from '../main-page/main-page.component';
import { DragonballService } from '../Services/Dragonball.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {


  @Input() nuevo: Personaje ={
    nombre:'',
    poder: 0
  } 

    /*@Output() onNuevoPJ: EventEmitter<Personaje> = new EventEmitter();*/

  Agregar( ){
    if (this.nuevo.nombre.trim().length === 0){
      return; 
    }  
    console.log(this.nuevo)
     /* this.onNuevoPJ.emit(this.nuevo) */
     this.DragonballService.agregarPJ(this.nuevo)
    this.nuevo ={nombre:'', poder: 0}
  }
  
  constructor(private DragonballService: DragonballService){}

}
