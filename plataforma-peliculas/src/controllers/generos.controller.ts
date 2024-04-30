import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
