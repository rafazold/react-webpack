import axios from 'axios';

export const github = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export const routes = {
  search: '/search/users', // params: q
};

export const searchUserByName = async (searchTerm) => {
  return await github
    .get('/search/users', {
      params: { q: searchTerm, type: 'Users' },
    })
    .then((res) => res.data.items)
    .catch(() => {
      //TODO: add error handling
      console.log('something went wrong...');
    });
};

export const getSingleUser = async (userLogin) => {
  return await github
    .get(`/users/${userLogin}`)
    .then((res) => res)
    .catch(() => {
      //TODO: add error handling
      console.log('something went wrong...');
    });
};
