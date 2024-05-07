/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import Pelicula from 'src/models/pelicula.dto';
import peliculasQueries from './queries/peliculas.queries';
import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { DatabaseService } from './db.service';
@Injectable()
export class PeliculasService {
  constructor(private dbService: DatabaseService) {}

  async getPeliculas(): Promise<Pelicula[]> {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
      peliculasQueries.selectAll,
      [],
    );
    const resultPeliculas = resultQuery.map((rs: RowDataPacket) => {
      return {
        peliculaId: rs['peliculaId'],
        titulo: rs['titulo'],
        sinopsis: rs['sinopsis'],
        imagen: rs['imagenUrl'],
        duracion: rs['duracion'],
        fechaLanzamiento: rs['fechaLanzamiento'],
        actoresPrincipales: null,
        listaGeneros: null,
      };
    });
    return resultPeliculas;
  }

  async createPelicula(pelicula: Pelicula): Promise<Pelicula> {
    const resultQuery: ResultSetHeader = await this.dbService.executeQuery(
      peliculasQueries.insert,
      [
        pelicula.titulo,
        pelicula.sinopsis,
        pelicula.imagen || null,  // si es opcional al ponerle o null descarto el undefined que puede generar errores
        pelicula.duracion,
        pelicula.fechaLanzamiento,
      ],
    );
    return {
      ...pelicula,
      peliculaId: resultQuery.insertId,
    };
  }

  async updatePelicula(peliculaId: number, pelicula: Pelicula): Promise<Pelicula> {
    const resultQuery: ResultSetHeader = await this.dbService.executeQuery(
      peliculasQueries.update,
      [
        pelicula.titulo,
        pelicula.sinopsis,
        pelicula.imagen,
        pelicula.duracion,
        pelicula.fechaLanzamiento,
        peliculaId,
      ],
    );
    if (resultQuery.affectedRows == 1) {
      return pelicula;
    }
    throw new HttpException(
      'No se pudo actualizar Pelicula',
      HttpStatus.NOT_FOUND,
    );
  }

  async deletePelicula(peliculaId: number): Promise<void> {
    try {
      const resultQuery: ResultSetHeader = await this.dbService.executeQuery(
        peliculasQueries.delete,
        [peliculaId],
      );
      if (resultQuery.affectedRows != 1) {
        throw new HttpException(
          'No se pudo eliminar Pelicula',
          HttpStatus.NOT_FOUND,
        );
      }
    } catch (error) {
      if (error.errno == 1451) {
        throw new HttpException(
          'No se pudo eliminar pelicula ya que esta referenciado por otro registro',
          HttpStatus.CONFLICT,
        );
      }
      throw new HttpException(
        `Error eliminando pelicula: ${error.sqlMessage}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
