interface Pelicula {
    id: number,
    titulo: string,
    actoresPrincipales: string[],
    listaGeneros: string[],
    sinopsis: string,
    imagen: string,
    duracion: number,
    fechaLanzamiento: string
}

export default Pelicula