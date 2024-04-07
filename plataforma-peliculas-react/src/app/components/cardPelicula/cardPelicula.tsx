import Pelicula from "@/app/model/pelicula.model"

export const CardPeliculas = (props: any) => {
    const { peliculas }: { peliculas: Pelicula[] } = props;

    return (
        <>
            {peliculas.map((pl: Pelicula) => (
                <div key= {pl.id}>{pl.titulo}</div>
            ))}
        </>
    )
}