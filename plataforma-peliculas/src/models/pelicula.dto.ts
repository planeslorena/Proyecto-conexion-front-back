import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';

class Pelicula {
  @IsInt()
  @IsOptional()
  peliculaId: number;

  @IsString()
  titulo?: string;

  @IsArray()
  @IsOptional()
  actoresPrincipales: string[];

  @IsArray()
  @IsOptional()
  listaGeneros: string[];

  @IsString()
  sinopsis: string;

  @IsString()
  @IsOptional()
  imagen: string;

  @IsInt()
  duracion: number;

  @IsString()
  fechaLanzamiento: string;
}

export default Pelicula;
