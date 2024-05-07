import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import Genero from 'src/models/genero.dto';
import { DatabaseService } from './db.service';
import generosQueries from './queries/generos.queries';
import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';

@Injectable()
export class GenerosService {
  constructor(private dbService: DatabaseService) {}

  async getAllGeneros(): Promise<Genero[]> {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
      generosQueries.selectAll,
      [],
    );
    const resultGenero = resultQuery.map((rs: RowDataPacket) => {
      return {
        generoId: rs['generoId'],
        nombre: rs['nombre'],
      };
    });
    return resultGenero;
  }

  async crearGenero(genero: Genero): Promise<Genero> {
    const resultQuery: ResultSetHeader = await this.dbService.executeQuery(
      generosQueries.insert,
      [genero.nombre],
    );
    return {
      generoId: resultQuery.insertId,
      nombre: genero.nombre,
    };
  }

  async actualizarGenero(generoId: number, genero: Genero): Promise<Genero> {
    const resultQuery: ResultSetHeader = await this.dbService.executeQuery(
      generosQueries.update,
      [genero.nombre, generoId],
    );
    if (resultQuery.affectedRows == 1) {
      return genero;
    }
    throw new HttpException(
      'No se pudo actualizar Genero',
      HttpStatus.NOT_FOUND,
    );
  }

  async eliminarGenero(generoId: number): Promise<void> {
    try {
      const resultQuery: ResultSetHeader = await this.dbService.executeQuery(
        generosQueries.delete,
        [generoId],
      );
      if (resultQuery.affectedRows != 1) {
        throw new HttpException(
          'No se pudo actualizar Genero',
          HttpStatus.NOT_FOUND,
        );
      }
    } catch (error) {
      if (error.errno == 1451) {
        throw new HttpException(
          'No se pudo eliminar genero ya que esta referenciado por otro registro',
          HttpStatus.CONFLICT,
        );
      }
      throw new HttpException(
        `Error eliminando genero: ${error.sqlMessage}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
