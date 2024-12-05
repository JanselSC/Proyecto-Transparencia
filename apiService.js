// apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/files';  // URL de tu servidor Node.js

export const fetchFiles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener archivos:', error);
    return [];
  }
};
