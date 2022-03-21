import { NgModule } from "@angular/core";
import { ContadorComponent } from './Contador.component';

@NgModule({
    declarations:[ 
        ContadorComponent
    ],              
    exports:[
        ContadorComponent
    ]
})

export class ContadorModule{}