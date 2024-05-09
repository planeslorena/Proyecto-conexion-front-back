import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from './db.service';
import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import actoresQueries from './queries/actores.queries';
import Actor from 'src/models/actores.dto';

@Injectable()
export class ActoresService {
  constructor(private dbService: DatabaseService) {}

  async getAllActores(): Promise<Actor[]> {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
      actoresQueries.selectAll,
      [],
    );
    const resultActor = resultQuery.map((rs: RowDataPacket) => {
      return {
        actorId: rs['actorId'],
        nombreCompleto: rs['nombreCompleto'],
      };
    });
    return resultActor;
  }

  async crearActor(genero: Actor): Promise<Actor> {
    const resultQuery: ResultSetHeader = await this.dbService.executeQuery(
      actoresQueries.insert,
      [genero.nombreCompleto],
    );
    return {
      actorId: resultQuery.insertId,
      nombreCompleto: genero.nombreCompleto,
    };
  }

  async updateActor(id:number, newActor: Actor): Promise<Actor> {
    const resultQuery: ResultSetHeader = await this.dbService.executeQuery(
        actoresQueries.update,
        [newActor.nombreCompleto, id],
      );
      if (resultQuery.affectedRows == 1) {
        return newActor;
      }
  
      throw new HttpException('No pudo actualizarse el actor', HttpStatus.NOT_FOUND)
  }

  async deleteActor (id:number) {
    const resultQuery: ResultSetHeader = await this.dbService.executeQuery(
        actoresQueries.delete,
        [ id],
      );
      if (resultQuery.affectedRows != 1) {
        throw new HttpException('No pudo borrarse el actor', HttpStatus.NOT_FOUND)
    }
  
  }
}
