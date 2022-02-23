import { Component  } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

 nombreMinuscula:string = 'julian';
 nombreMayuscula:string = 'JULIAN';
 nombreTitleCase:string = 'jUlIAn oSOriO';

 fecha:Date =  new Date();

}
