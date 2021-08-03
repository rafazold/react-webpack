import React, { useState } from 'react';
import { getSingleUser, github, routes, searchUserByName } from '../api/github';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let promises = [];
    searchUserByName(searchTerm).then((x) => {
      getSingleUser(x[0].login).then((y) => {
        console.log(y);
      });
      // console.log(x);
    });
  };
  return (
    <div>
      <ol className="list-decimal">
        <li className="list-inside">INPUT & BUTTON</li>
        <li className="list-inside">USERS FOUND</li>
        <li className="list-inside">list of users</li>
      </ol>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-b-2 border-black"
          onChange={(e) => {
            setSearchTerm(e.currentTarget.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      {results.length ? results.map((user) => <div>{}</div>) : 'no users found'}
    </div>
  );
};

export default Search;
