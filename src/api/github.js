import axios from 'axios';

export const github = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export const routes = {
  search: '/search/users', // params: q
};
