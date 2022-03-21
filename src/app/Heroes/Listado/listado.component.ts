import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
 
})
export class ListadoComponent {

  heroes :string[] = ['Spiderman', 'Thor', 'Ironman', 'HawkEye'];
  borrado: string ="";
  mostrar: boolean = false;
    
  
  borrarHeroe(){

    const borrado  = this.heroes.shift()|| '';
    this.borrado= borrado 
  };


}                                              