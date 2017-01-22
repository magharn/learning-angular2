// Importar el núcleo de Angular
import {Component} from 'angular2/core';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    template: '<h1>Peliculas en Angular 2:</h1>'+
    '<p>Pelicula: {{pelicula}}</p>'+
    '<p>Director: {{director}}</p>'+
    '<p>Año: {{anio}}</p>'
})

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
  pelicula: string;
  director: string;
  anio: number;

  constructor(){
    this.pelicula = 'Batman v. Superman';
    this.director = 'Zack Snider';
    this.anio = 2016;    
  }
}
