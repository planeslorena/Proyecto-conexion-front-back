
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
import Actor from 'src/models/actores.dto';
import { JwtMiddlewareGuard } from 'src/services/Jwtguard.service';
import { ActoresService } from 'src/services/actores.service';

@Controller('/api/actores')
@UseGuards(JwtMiddlewareGuard)
export class ActoresController {
  constructor(private readonly actoresService: ActoresService) { }

  @Get()
  async getPeliculas(): Promise<Actor[]> {
    return await this.actoresService.getAllActores();
  }

  @Post()
  async crearPelicula(@Body() body: Actor):Promise<Actor>  {
    return await this.actoresService.crearActor(body);
  }

  
  @Put('/:id')
  async updateActor(
    @Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.BAD_REQUEST,}),) id: number,
    @Body() body: Actor): Promise<Actor> {

    const newActor = body;
    return this.actoresService.updateActor(id, newActor);
  }

  @Delete('/:id')
  async deleteActor(
    @Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.BAD_REQUEST,}),) id: number,
    ){
    this.actoresService.deleteActor(id);
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
