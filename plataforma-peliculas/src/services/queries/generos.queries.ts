const generosQueries = {
  insert: 'insert into generos (nombre) values ( ? );',
  selectAll: 'select generoId, nombre from generos;',
};

export default generosQueries;
