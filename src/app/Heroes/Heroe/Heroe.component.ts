import { Component } from "@angular/core";



@Component({
    selector: 'app-Heroe',
    templateUrl: 'Heroe.component.html'
})
export class HeroeComponent{
    nombre: string= 'Ironman';
    edad: number = 45

    get nombreMayuscula(){
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad} `;
        // lo mismo que  return this.nombre + ' - ' + this.edad.toString
    }

    cambiarNombre(){
        this.nombre='Spiderman';
    }
    cambiarEdad(){
        this.edad=25;
    }
}