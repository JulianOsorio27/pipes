import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  valorMayuscula:boolean = true;
  ordenarPor:string='';

  heroes: Heroe[] = [ 
    {
      nombre: 'Batman',
      vuela:false,
      color: Color.negro
    },
    {
      nombre: 'Superman',
      vuela:true,
      color: Color.azul
    },
    {
      nombre: 'Robin',
      vuela:false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela:false,
      color: Color.rojo
    },
    {
      nombre: 'Mujer Maravilla',
      vuela:true,
      color: Color.dorado
    },
    {
      nombre: 'Linterna Verde',
      vuela:true,
      color: Color.verde
    }
   ]

  constructor() { }

  ngOnInit(): void {
  }

  enMayuscula = () => {
   this.valorMayuscula = !this.valorMayuscula;
  }

  cambiarOrden = (valor:string ) => {
    this.ordenarPor =  valor;
  }

}
