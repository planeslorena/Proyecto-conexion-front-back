import { IsInt, IsOptional, IsString } from 'class-validator';

class Actor {
  @IsInt()
  @IsOptional()
  actorId: number;

  @IsString()
  nombreCompleto: string;
}

export default Actor;
