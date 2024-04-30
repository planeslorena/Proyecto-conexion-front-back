import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import Pelicula from 'src/models/pelicula.dto';

let peliculas: Pelicula[] = [
  {
    id: 1,
    titulo: 'El Padrino',
    actoresPrincipales: ['Marlon Brando', 'Al Pachino'],
    listaGeneros: ['Drama', 'Crimen'],
    sinopsis:
      'Don Vito Corleone, conocido dentro de los círculos del hampa como El Padrino, es el patriarca de una de las cinco familias que ejercen el mando de la Cosa Nostra en Nueva York en los años cuarenta. Don Corleone tiene cuatro hijos: una chica, Connie, y tres varones; Sonny, Michael y Fredo. Cuando el Padrino reclina intervenir en el negocio de estupefacientes, empieza una cruenta lucha de violentos episodios entre las distintas familias del crimen organizado.',
    imagen:
      'https://vignette.wikia.nocookie.net/doblaje/images/9/9a/Elpadrino.jpg/revision/latest?cb=20170311061852&path-prefix=es',
    duracion: 175,
    fechaLanzamiento: '1972',
  },
  {
    id: 2,
    titulo: 'Click: perdiendo el control',
    actoresPrincipales: [
      'Adam Sandler',
      'Kate Beckinsale',
      'Christopher Walken',
    ],
    listaGeneros: ['Ciencia Ficcion', 'Comedia Dramatica'],
    sinopsis:
      'Michael Newman es un arquitecto muy ocupado que intenta progresar en el trabajo y al mismo tiempo tener tiempo para su mujer Donna y sus dos hijos. Un día, después de buscar sin éxito el mando de la televisión, decide comprar uno nuevo. Sin embargo, descubre que el nuevo mando no solo controla los aparatos electrónicos sino que también controla toda su vida. Rápidamente, Michael se vuelve adicto a este poder.',
    imagen: '',
    duracion: 147,
    fechaLanzamiento: '17 de agosto, 2006',
  },
  {
    id: 3,
    titulo: 'Shrek',
    actoresPrincipales: ['Mike Myers', 'Eddie Murphy', 'Cameron Diaz'],
    listaGeneros: ['Animacion', 'Aventura', 'Comedia', 'Satira'],
    sinopsis:
      'Hace mucho tiempo, en una lejana ciénaga, vivía un ogro llamado Shrek. Un día, su preciada soledad se ve interrumpida por un montón de personajes de cuento de hadas que invaden su casa. Todos fueron desterrados de su reino por el malvado Lord Farquaad. Decidido a devolverles su reino y recuperar la soledad de su ciénaga, Shrek llega a un acuerdo con Lord Farquaad y va a rescatar a la princesa Fiona, la futura esposa del rey. Sin embargo, la princesa esconde un oscuro secreto.',
    imagen: '',
    duracion: 129,
    fechaLanzamiento: '19 de julio, 2001',
  },
];

@Injectable()
export class PeliculasService {
  getPeliculas(): Pelicula[] {
    return peliculas;
  }
  getPeliculaByID(id: number) {
    const pelicula: Pelicula = peliculas.find((pl) => pl.id == id);
    if (!pelicula) {
      throw new HttpException('La pelicula no existe.', HttpStatus.BAD_REQUEST);
    }
    return pelicula;
  }

  updatePelicula(id: number, newPelicula: Pelicula): Pelicula {
    const peliculaupdated = peliculas.find((pl) => pl.id == id);
    if (!peliculaupdated) {
      throw new HttpException(
        'La pelicula que quiere actualizar no existe',
        HttpStatus.BAD_REQUEST,
      );
    }

    peliculaupdated.actoresPrincipales = newPelicula.actoresPrincipales;
    peliculaupdated.duracion = newPelicula.duracion;
    peliculaupdated.fechaLanzamiento = newPelicula.fechaLanzamiento;
    peliculaupdated.imagen = newPelicula.imagen;
    peliculaupdated.listaGeneros = newPelicula.listaGeneros;
    peliculaupdated.sinopsis = newPelicula.sinopsis;
    peliculaupdated.titulo = newPelicula.titulo;

    return peliculaupdated;
  }

  deletePelicula(id: any) {
    if (!peliculas.find((pl) => pl.id == id)) {
      throw new HttpException(
        'La pelicula que quiere eliminar no existe',
        HttpStatus.BAD_REQUEST,
      );
    }
    peliculas = peliculas.filter((pl) => pl.id != id);
  }
}
