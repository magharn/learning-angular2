System.register(['angular2/core', '../model/pelicula'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pelicula_1;
    var PeliculasListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            }],
        execute: function() {
            PeliculasListComponent = (function () {
                function PeliculasListComponent() {
                    this.mostrarDatos = false;
                    this.pelicula = new pelicula_1.Pelicula(1, "Batman vs Superman", "Zack Snider", 2016);
                    this.peliculas = [
                        new pelicula_1.Pelicula(1, "Batman vs Superman", "Zack Snider", 2016),
                        new pelicula_1.Pelicula(2, "La verdad duele", "Will Smith", 2016),
                        new pelicula_1.Pelicula(3, "El señor de los anillos", "Desconocido", null),
                        new pelicula_1.Pelicula(5, "Una historia real", "El de los", 2014),
                        new pelicula_1.Pelicula(1, "Don Juan", "Snider", 2017)
                    ];
                    this.debug();
                }
                PeliculasListComponent.prototype.debug = function (titulo) {
                    if (titulo === void 0) { titulo = null; }
                    if (titulo == null) {
                        console.log(this.pelicula);
                    }
                    else {
                        console.log(this.pelicula.titulo);
                    }
                };
                PeliculasListComponent.prototype.onShowHide = function (value) {
                    this.mostrarDatos = value;
                };
                PeliculasListComponent = __decorate([
                    core_1.Component({
                        selector: 'peliculas-list',
                        templateUrl: 'app/view/peliculas-list.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], PeliculasListComponent);
                return PeliculasListComponent;
            }());
            exports_1("PeliculasListComponent", PeliculasListComponent);
        }
    }
});
//# sourceMappingURL=peliculas-list.component.js.map