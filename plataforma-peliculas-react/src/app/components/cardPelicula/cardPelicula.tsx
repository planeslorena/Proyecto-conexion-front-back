import Pelicula from "@/app/model/pelicula.model"
import './cardPelicula.css'
import { useEffect, useState } from "react";
import { FormModificarPelicula } from "../formModificarPelicula/formModificarPelicula";
import { getAllPeliculas, patchPelicula} from "@/app/services/Peliculas";

export const CardPeliculas = (props: any) => {
  const { peliculas , eliminarPelicula, modificarPeli }: { peliculas: Pelicula[] , eliminarPelicula : Function, modificarPeli: Function} = props;
  const [mostrarForm, setMostrarForm] = useState<boolean>(false);
  const [peliculasMostrar, setPeliculas] = useState<Pelicula[]>(peliculas);

  const modificarPelicula = async (pelicula: Pelicula) => {
    /*await patchPelicula(pelicula);
    const peliculasAct = await getAllPeliculas();
    setPeliculas(peliculasAct);*/
    modificarPeli(pelicula);
  }

  useEffect(() => {
    setPeliculas(peliculas)
  }, [peliculas]);

  return (
    <>
      {peliculasMostrar.map((pl: Pelicula) => (
        <div className="card-peliculas d-flex flex-column align-items-center" key={pl.id}>
          <img src={pl.imagen} className="card-img" alt={pl.imagen} />
          <p>{pl.titulo}</p>
          <p>Sinopsis: {pl.sinopsis}</p>

          <button onClick={() => eliminarPelicula(pl.id)}>Eliminar Pelicula</button>
          <button onClick={() => setMostrarForm(!mostrarForm)}>Modificar Pelicula</button>
            {mostrarForm && <FormModificarPelicula modificarPelicula ={(pelicula: Pelicula) => modificarPelicula(pelicula)}  pelicula ={pl}/>}
        </div>
      ))}
    </>
  )
}

