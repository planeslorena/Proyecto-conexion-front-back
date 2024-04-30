import { IsInt, IsOptional, IsString } from 'class-validator';

class Genero {
  @IsInt()
  @IsOptional()
  generoId: number;

  @IsString()
  nombre: string;
}

export default Genero;
