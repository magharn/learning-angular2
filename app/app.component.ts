// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from './model/pelicula';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: 'app/view/peliculas.html',
    styleUrls:["../assets/css/styles.css"]
})

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
  public titulo:string;
  public pelicula:Pelicula;

  constructor() {
    this.titulo = "Películas con Angular2";

    this.pelicula = new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016);

    this.debug();
  }

  debug() {
    console.log(this.pelicula);
  }
}
