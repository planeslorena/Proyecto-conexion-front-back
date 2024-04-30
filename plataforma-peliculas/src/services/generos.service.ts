import { Injectable } from '@nestjs/common';
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
}
