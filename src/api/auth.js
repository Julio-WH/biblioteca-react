import axios from 'axios'

const API_URL=`${process.env.REACT_APP_API_URL}/api/v1/auth/login`;

export const loginApi = async (body) => {
    try {
      const response = await axios.post(API_URL, body);
      return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
      throw error; // Lanza el error para que pueda ser manejado donde se llame a esta función
    }
  };