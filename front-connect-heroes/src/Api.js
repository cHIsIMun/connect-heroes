import axios from 'axios';
import { LOGIN_ROUTE, POSTS_ROUTE, FEED_USER_ROUTE } from './apiRoutes';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Altere a URL base da sua API conforme necessário
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (username, password) => {
  try {
    const response = await api.post(LOGIN_ROUTE, { username, password });
    return response.data;
  } catch (error) {
    throw new Error('Erro de autenticação');
  }
};

export const createPost = async (formData) => {
  try {
    const authToken = localStorage.getItem('authToken');
    const response = await api.post(POSTS_ROUTE, formData, {
      headers: {
        Authorization: `Token ${authToken}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error('Erro ao criar a publicação');
    }
  } catch (error) {
    throw new Error('Erro ao criar a publicação: ' + error.message);
  }
};

export const getPosts = async () => {
  try {
    const response = await api.get(POSTS_ROUTE);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter posts');
  }
};

export const getFeedData = async () => {
  try {
    const authToken = localStorage.getItem('authToken');
    const response = await api.get(FEED_USER_ROUTE, {
      headers: {
        Authorization: `Token ${authToken}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Erro ao obter o feed do usuário');
    }
  } catch (error) {
    throw new Error('Erro ao obter o feed do usuário: ' + error.message);
  }
};