
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import Pelicula from 'src/models/pelicula.dto';
import { PeliculasService } from 'src/services/peliculas.service';

@Controller('/api/peliculas')
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) { }

  @Get()
  getPeliculas(): Pelicula[] {
    return this.peliculasService.getPeliculas();
  }

  @Get('/:id')
  getPeliculaByID(
    @Param(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      }),
    )
    id: number,
  ): Pelicula {
    return this.peliculasService.getPeliculaByID(id);
  }

  @Patch('/:id')
  updatePelicula(
    @Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.BAD_REQUEST,}),) id: number,
    @Body() body: Pelicula): Pelicula {

    const newPelicula = body;
    return this.peliculasService.updatePelicula(id, newPelicula);
  }

  @Delete('/:id')
  deletePelicula(
    @Param('id', new ParseIntPipe({
 errorHttpStatusCode: HttpStatus.BAD_REQUEST, }),) id: number): void {
    this.peliculasService.deletePelicula(id);
  }
}
