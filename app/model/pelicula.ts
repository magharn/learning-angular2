import {Component} from 'angular2/core';

export class Pelicula {
  constructor(
    public id:number,
    public pelicula:string,
    public director:string,
    public anio:number) { }
}
