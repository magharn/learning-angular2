import {Component} from 'angular2/core';
import {Pelicula} from '../model/pelicula';
import {PeliculaService} from '../services/peliculas.service';

@Component({
    selector: 'peliculas-list',
    templateUrl: 'app/view/peliculas-list.html',
    providers: [PeliculaService]
})


export class PeliculasListComponent {
  public selectedPelicula:Pelicula;
  public mostrarDatos:boolean;
  public peliculas:Array<Pelicula>;
  //public datoService;

  constructor(private _peliculaService:PeliculaService) {
    this.mostrarDatos = false;
    //this.datoService =

    this.peliculas = _peliculaService.getPeliculas();

    this.selectedPelicula = this.peliculas[0];

  }

  debug(titulo = null) {
    if (titulo == null) {
      console.log(this.selectedPelicula);
    } else {
      console.log(this.selectedPelicula.titulo);
    }

  }

  onShowHide(value) {
    this.mostrarDatos = value;
  }

  onCambiarPelicula(pelicula) {
    this.selectedPelicula = pelicula;
  }
}
