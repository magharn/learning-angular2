// Importar el núcleo de Angular
import {Component} from 'angular2/core';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/peliculas.html'
})

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
  peliculas = [
      {
          "pelicula": "Batman v. Superman",
          "director": "Zack Snider",
          "anio": "2016"
      },
      {
          "pelicula": "La verdad duele",
          "director": "Will Smith",
          "anio": "2015"
      },
      {
          "pelicula": "Una historia real",
          "director": "Desconocido",
          "anio": "2014"
      }];

  constructor(){

  }
}
