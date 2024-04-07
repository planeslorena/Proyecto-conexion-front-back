import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculasController } from './controllers/peliculas.controller';
import { PeliculasService } from './services/peliculas.service';

@Module({
  imports: [],
  controllers: [AppController, PeliculasController],
  providers: [AppService, PeliculasService],
})
export class AppModule {}
