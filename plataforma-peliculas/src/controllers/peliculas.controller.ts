/* eslint-disable prettier/prettier */

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import Pelicula from 'src/models/pelicula.dto';
import { PeliculasService } from 'src/services/peliculas.service';

@Controller('/api/peliculas')
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) { }

  @Get()
  async getPeliculas(): Promise<Pelicula[]> {
    return this.peliculasService.getPeliculas();
  }

  // @Get('/:peliculaId')
  // async getPeliculaByID(@Param('peliculaId',new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }))
  //   id: number,
  // ): Promise<Pelicula> {
  //   return this.peliculasService.getPeliculaByID(id);
  // }

  @Post()
  async createPelicula(@Body() body: Pelicula): Promise<Pelicula> {
    const newPelicula = body;
    return await this.peliculasService.createPelicula(newPelicula);
  }

  @Put('/:peliculaId')
  async updatePelicula(
    @Param('peliculaId', new ParseIntPipe({errorHttpStatusCode: HttpStatus.BAD_REQUEST,}),) id: number,@Body() body: Pelicula): Promise<Pelicula> {
    const newPelicula = body;
    return await this.peliculasService.updatePelicula(id, newPelicula);
  }

  @Delete('/:peliculaId')
  async deletePelicula(
    @Param('peliculaId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST, }),) peliculaId: number): Promise<void> {
    this.peliculasService.deletePelicula(peliculaId);
  }
}
