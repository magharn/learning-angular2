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
  public mostrarDatos:boolean;
  public peliculas;

  constructor() {
    this.mostrarDatos = false;
    this.titulo = "Películas con Angular2";

    this.pelicula = new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016);

    this.peliculas = [
      new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016),
      new Pelicula(2, "La verdad duele", "Will Smith", 2016),
      new Pelicula(3, "El señor de los anillos", "Desconocido", null),
      new Pelicula(5, "Una historia real", "El de los", 2014),
      new Pelicula(1, "Don Juan", "Snider", 2017)

    ];

    this.debug();
  }

  debug(titulo = null) {
    if (titulo == null) {
      console.log(this.pelicula);
    } else {
      console.log(this.pelicula.titulo);
    }

  }

  onShowHide(value) {
    this.mostrarDatos = value;
  }
}
