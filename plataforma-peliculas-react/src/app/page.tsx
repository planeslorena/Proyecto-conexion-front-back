'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { deletePelicula, getAllPeliculas } from "./services/Peliculas";
import { useState } from "react";
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

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <button onClick={() => cargarPeliculas()}>Peliculas</button>
          {peliculas && <CardPeliculas eliminarPelicula ={(id:number) => eliminarPelicula(id)} peliculas = {peliculas} ></CardPeliculas>}
      </div>
    </main>
  );
}
