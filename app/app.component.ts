// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from './model/pelicula';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/peliculas.html'
})

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
  titulo = 'Peliculas Angular 2';
  peliculas = [
    new Pelicula(1, 'Batman v. Superman', "Zack Snider", 2016),
    new Pelicula(2, 'La verdad duele', 'Will Smith', 2015),
    new Pelicula(3, 'Una historia real', 'Desconocido', 2014),
  ];

  constructor(){

  }
}
