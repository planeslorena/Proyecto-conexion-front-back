
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
  UseGuards,
} from '@nestjs/common';
import Pelicula from 'src/models/pelicula.dto';
import { JwtMiddlewareGuard } from 'src/services/Jwtguard.service';
import { PeliculasService } from 'src/services/peliculas.service';

@Controller('/api/peliculas')
@UseGuards(JwtMiddlewareGuard)
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) { }

  @Get()
  async getPeliculas(): Promise<Pelicula[]> {
    return await this.peliculasService.getPeliculas();
  }

  @Post()
  async crearPelicula(@Body() body: Pelicula):Promise<Pelicula>  {
    return await this.peliculasService.crearPelicula(body);
  }

  @Put('/:id')
  async updatePelicula(
    @Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.BAD_REQUEST,}),) id: number,
    @Body() body: Pelicula): Promise<Pelicula> {

    const newPelicula = body;
    return this.peliculasService.updatePelicula(id, newPelicula);
  }

  /*@Get('/:id')
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
  }*/
}
