const actoresQueries = {
    insert: 'insert into actores (nombreCompleto) values ( ? );',
    selectAll: 'select actorId, nombreCompleto from actores;',
    update: 'update actores set nombreCompleto = ? where actorId = ?',
    delete: 'delete from actores where actorId = ?'
  };
  
  export default actoresQueries;
  