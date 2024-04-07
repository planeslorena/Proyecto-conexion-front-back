
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
    Res,
  } from '@nestjs/common';
import Pelicula from 'src/models/pelicula.model';
import { PeliculasService } from 'src/services/peliculas.service';

  @Controller('/api/peliculas')
  export class PeliculasController {
    constructor(private readonly peliculasService: PeliculasService) {}
  
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

  /**
    @Post()
    createPelicula(@Body() body: Pelicula): Pelicula | string {
      const newPelicula = body;
      const pelicula = this.peliculasService.createPelicula(newPelicula);
      if (pelicula) {
        return Pelicula;
      }
      return 'Fallo la creacion de Pelicula';
    }
  
    @Put('/:id')
    updatePelicula(@Param() params: any, @Body() body: Pelicula): Pelicula | string {
      const newPelicula = body;
      const { id } = params;
      const Pelicula = this.PeliculaService.updatePelicula(id, newPelicula);
      if (Pelicula) {
        return Pelicula;
      }
      return 'Error actualizando Pelicula';
    }
  
    @Delete('/:id')
    deletePelicula(@Param() params: any): void {
      const { id } = params;
      this.PeliculaService.deletePelicula(id);
      return;
    }
    */
  }
