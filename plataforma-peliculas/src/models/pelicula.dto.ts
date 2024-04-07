import { IsArray, IsInt, IsNumber, IsString  } from "class-validator"

class Pelicula {
    @IsInt()
    id: number;

    @IsString()
    titulo: string;

    @IsArray()
    actoresPrincipales: string[];

    @IsArray()
    listaGeneros: string[];

    @IsString()
    sinopsis: string;

    @IsString()
    imagen: string;

    @IsInt()
    duracion: number;

    @IsString()
    fechaLanzamiento: string;
}

export default Pelicula