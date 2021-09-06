import axios from 'axios';

export const github = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: { authorization: `token ${process.env.API_TOKEN}` },
});

export const routes = {
  search: '/search/users', // params: q
};

export const searchUserByName = async (searchTerm, page = 1) => {
  return await github
    .get('/search/users', {
      params: { q: searchTerm, type: 'Users', per_page: 30, page: page },
    })
    .then((res) => res)
    .catch((e) => {
      console.log(e);
    });
};

export const getSingleUser = async (userLogin) => {
  return await github
    .get(`/users/${userLogin}`)
    .then((res) => res)
    .catch((e) => {
      console.log(e);
    });
};
