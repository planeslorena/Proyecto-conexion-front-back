import Pelicula from "@/app/model/pelicula.model"
import './cardPelicula.css'

export const CardPeliculas = (props: any) => {
  const { peliculas , eliminarPelicula }: { peliculas: Pelicula[] , eliminarPelicula : Function} = props;

  return (
    <>
      {peliculas.map((pl: Pelicula) => (
        <div className="card-peliculas d-flex flex-column align-items-center" key={pl.id}>
          <img src={pl.imagen} className="card-img" alt={pl.imagen} />
          <p>{pl.titulo}</p>
          <p>Sinopsis: {pl.sinopsis}</p>

          <button onClick={() => eliminarPelicula(pl.id)}>Eliminar Pelicula</button>
        </div>
      ))}
    </>
  )
}