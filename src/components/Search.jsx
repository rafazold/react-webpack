import React, { useEffect, useState } from 'react';
import { getSingleUser, github, routes, searchUserByName } from '../api/github';
import Card from './Card.jsx';
import Preloader from './Preloader';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const [totalResults, setTotalResults] = useState(null);

  const fetchUsers = () => {
    searchUserByName(searchTerm, page).then((res) => {
      setTotalResults(res.data['total_count']);
      const searchResult = res.data.items;
      const totalPages = Math.ceil(res.data['total_count'] / 30);
      res.data['total_count'] > 0 &&
        Promise.all(searchResult.map((user) => getSingleUser(user.login))).then(
          (usersData) => {
            let users = usersData.map((profile) => ({
              email: profile.data.email,
              name: profile.data.name,
              avatar: profile.data.avatar_url,
              description: profile.data.bio,
              login: profile.data.login,
            }));

            setResults([...results, ...users]);
          }
        );
      page >= totalPages && setIsLastPage(true);
      setSubmitted(false);
    });
  };

  const reset = () => {
    setResults([]);
    setPage(1);
    setTotalResults(null);
    setIsLastPage(false);
  };

  useEffect(() => {
    if (submitted) {
      fetchUsers();
    }
  }, [page, submitted]);

  const handleSubmit = (e) => {
    if (searchTerm) {
      reset();
      e.preventDefault();
      setSubmitted(true);
    }
  };
  return (
    <div>
      <form className="flex justify-center mb-10" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-black rounded-md mr-4 text-base p-1"
          onChange={(e) => {
            setSearchTerm(e.currentTarget.value);
          }}
        />
        <button className="shadow px-2 rounded-lg" type="submit">
          Search
        </button>
        <button
          className="shadow px-2 rounded-lg ml-2"
          onClick={() => {
            setSearchTerm('');
            reset();
          }}
        >
          Reset
        </button>
      </form>
      {totalResults !== null && (
        <div className="text-center font-bold">
          {totalResults.toLocaleString()} users found
        </div>
      )}
      {results.length > 0 && (
        <div className="lg:grid grid-cols-5 gap-4 p-6">
          {results.map(({ email, name, login, avatar, description }, i) => (
            <Card
              key={i}
              email={email}
              name={name}
              login={login}
              avatar={avatar}
              description={description}
            />
          ))}
        </div>
      )}
      {!submitted && !isLastPage && results.length > 0 && (
        <div className="w-full text-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              setPage(page + 1);
              setSubmitted(true);
            }}
            className="text-xl shadow-white mx-auto px-2 py-1 mb-14 rounded-md"
          >
            more results
          </button>
        </div>
      )}
      {submitted && (
        <div className="lg:grid grid-cols-5 gap-4 p-6">
          <Preloader />
          <Preloader />
          <Preloader />
          <Preloader />
          <Preloader />
        </div>
      )}
    </div>
  );
};

export default Search;
