System.register(['../model/pelicula'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pelicula_1;
    var PELICULAS;
    return {
        setters:[
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            }],
        execute: function() {
            exports_1("PELICULAS", PELICULAS = [
                new pelicula_1.Pelicula(1, "Batman vs Superman", "Zack Snider", 2016),
                new pelicula_1.Pelicula(2, "La verdad duele", "Will Smith", 2016),
                new pelicula_1.Pelicula(3, "El señor de los anillos", "Desconocido", null),
                new pelicula_1.Pelicula(5, "Una historia real", "El de los", 2014),
                new pelicula_1.Pelicula(1, "Don Juan", "Snider", 2017)
            ]);
        }
    }
});
//# sourceMappingURL=mock.peliculas.js.map