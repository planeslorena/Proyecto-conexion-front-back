'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { getAllPeliculas } from "./services/Peliculas";
import { useState } from "react";
import Pelicula from "./model/pelicula.model";
import { CardPeliculas } from "./components/cardPelicula/cardPelicula";

export default function Home() {
  const [peliculas, setpeliculas] = useState<Pelicula[]>([]);
  const [mostrarPeliculas, setMostrarPeliculas] = useState<boolean>(false);


  const cargarPeliculas = async () => {
    const rtaPeliculas = await getAllPeliculas();
    console.log(rtaPeliculas)
    setpeliculas(rtaPeliculas);

    setMostrarPeliculas(true);
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <button onClick={() => cargarPeliculas()}>Peliculas</button>
          {mostrarPeliculas && <CardPeliculas peliculas = {peliculas} ></CardPeliculas>}
      </div>
    </main>
  );
}
