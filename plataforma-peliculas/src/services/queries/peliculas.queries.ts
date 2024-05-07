const peliculasQueries = {
  insert:
    'insert into peliculas (titulo, sinopsis, imagenUrl, duracion, fechaLanzamiento) values (?, ?, ?, ?, ?);',
  selectAll:
    'select peliculaId, titulo, sinopsis, imagenUrl, duracion, fechaLanzamiento from peliculas;',
  update: `update peliculas set 
    titulo = ?, 
    sinopsis = ?, 
    imagenUrl = ?, 
    duracion = ?, 
    fechaLanzamiento = ? where peliculaId = ?;`,
  delete: 'delete from peliculas where peliculaId = ?;',
};

export default peliculasQueries;
