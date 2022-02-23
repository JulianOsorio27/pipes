import { Component  } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

// i18nSelect
  nombre:string = 'Julián';
  genero:string = 'masculino';

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'fenemino' : 'invitarla'
  }

  cambiarNombre = () => {
    this.nombre = 'María';
    this.genero = 'fenemino';
  }

  // i18nPlural
  clientes:string[]=['María', 'Juan', 'Andrés', 'Tatiana', 'Ana', 'Julián'];
  clientesMapa = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    '=2' : 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  eliminarCliente = () => {
    this.clientes.shift();
  }

  // KeyValue Pipe 

  persona = {
    nombre: 'Julián',
    edad: 26,
    direccion: 'Armenia-Quindio'
  }

  // Json
  heroes = [
    {
      nombre : 'Superman',
      vuela: true
    },
    {
      nombre : 'Batman',
      vuela: false
    },
    {
      nombre : 'IronMan',
      vuela: true
    }

  ];

  // Async

  miObservable = interval(1000);

  valorPromesa = new Promise( ( resolve, rejects ) => {

    setTimeout(() => {
      resolve( 'Tenemos data de la promesa' );
    }, 3500);

  } )
  

}
