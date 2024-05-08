import { IsArray, IsInt, IsNumber, IsOptional, IsString  } from "class-validator"

class Pelicula {
    @IsInt()
    @IsOptional()
    peliculaId: number;

    @IsString()
    titulo: string;

    @IsString()
    sinopsis: string;

    @IsString()
    @IsOptional()
    imagenUrl: string;

    @IsInt()
    duracion: number;

    @IsString()
    fechaLanzamiento: string;
}

export default Pelicula