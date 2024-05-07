import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import Genero from 'src/models/genero.dto';
import { GenerosService } from 'src/services/generos.service';

@Controller('/api/generos')
export class GenerosController {
  constructor(private readonly generosService: GenerosService) {}

  @Get()
  async getGeneros(): Promise<Genero[]> {
    return await this.generosService.getAllGeneros();
  }

  @Post()
  async crearGenero(@Body() body: Genero): Promise<Genero> {
    return await this.generosService.crearGenero(body);
  }

  @Put('/:generoId')
  async actualizarGenero(
    @Param('generoId') generoId: number,
    @Body() body: Genero,
  ): Promise<Genero> {
    return await this.generosService.actualizarGenero(generoId, body);
  }

  @Delete('/:generoId')
  async eliminarGenero(@Param('generoId') generoId: number): Promise<void> {
    return await this.generosService.eliminarGenero(generoId);
  }
}
