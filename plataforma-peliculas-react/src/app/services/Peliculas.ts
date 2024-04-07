import { AxiosResponse } from 'axios';
import clienteAxios from './Axios';


export const getAllPeliculas = async () => {
  try {
    const respuesta: AxiosResponse<any, any> = await clienteAxios.get('/peliculas');
    return respuesta.data;
  } catch (err) {
    throw new Error('Error consultando peliculas');
  }
}

export const deletePelicula = async (id:number) => {
  try {
    const respuesta: AxiosResponse<any, any> = await clienteAxios.delete('/peliculas/'+id);
    return respuesta.status;
  } catch (err) {
    throw new Error('Error consultando peliculas');
  }
}