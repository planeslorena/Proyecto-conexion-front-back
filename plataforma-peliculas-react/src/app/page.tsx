'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { deletePelicula, getAllPeliculas, patchPelicula } from "./services/Peliculas";
import { useEffect, useState } from "react";
import Pelicula from "./model/pelicula.model";
import { CardPeliculas } from "./components/cardPelicula/cardPelicula";

export default function Home() {
  const [peliculas, setpeliculas] = useState<Pelicula[]>([]);


  const cargarPeliculas = async () => {
    const rtaPeliculas = await getAllPeliculas();
    setpeliculas(rtaPeliculas);
  }

  const eliminarPelicula = async (id: number) => {
    const rtaEliminarPeliculas = await deletePelicula(id);
    if (rtaEliminarPeliculas == 200) {
      cargarPeliculas();
    }
  }

  const modificarPeli = async (pelicula: Pelicula) => {
    const resp = await patchPelicula(pelicula);
    console.log(resp);
    const peliculasAct = await getAllPeliculas();
    console.log(peliculasAct)
    setpeliculas(peliculasAct);
  }
  
  useEffect(() => {
    cargarPeliculas();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <CardPeliculas modificarPeli= {(pelicula:Pelicula) => modificarPeli(pelicula)} eliminarPelicula ={(id:number) => eliminarPelicula(id)} peliculas = {peliculas} ></CardPeliculas>
      </div>
    </main>
  );
}
