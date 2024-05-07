const generosQueries = {
  insert: 'insert into generos (nombre) values ( ? );',
  selectAll: 'select generoId, nombre from generos;',
  update: 'update generos set nombre = ? where generoId = ?;',
  delete: 'delete from generos where generoId = ?;',
};

export default generosQueries;
