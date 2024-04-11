import { AxiosResponse } from 'axios';
import clienteAxios from './Axios';

export const login = async (usuario:any) => {
  try {
    const respuesta: AxiosResponse<any, any> = await clienteAxios.post('auth/login',usuario);
    return respuesta.data;
  } catch (err) {
    throw new Error('Error en el login');
  }
}

