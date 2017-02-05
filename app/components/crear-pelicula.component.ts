// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Pelicula} from '../model/pelicula';
import {Router, RouteParams} from 'angular2/router';
import {PeliculaService} from '../services/peliculas.service';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    templateUrl: 'app/view/crear-pelicula.html',
    providers:[PeliculaService]
})

// Clase del componente donde iran los datos y funcionalidades
export class CrearPeliculaComponent implements OnInit{
  public tituloPelicula:string;

  constructor(private _peliculasService:PeliculaService,
    private _router:Router, private _routeParams:RouteParams) {

  }

  onCrearPelicula(titulo, director, anio) {
    let pelicula:Pelicula = new Pelicula(77, titulo, director, anio);
    this._peliculasService.insertPelicula(pelicula);
    this._router.navigate(["Peliculas"]);
  }

  ngOnInit():any {
    this.tituloPelicula = this._routeParams.get("titulo");
  }
}