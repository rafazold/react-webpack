import React from 'react';
import Search from './components/Search.jsx';
import logo from './assets/Octocat.png';

const App = () => (
  <div className="App container mx-auto h-full">
    <header className="text-center py-6">
      <h1 className="text-4xl font-medium">Welcome to Github Search</h1>
      <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-white object-contain p-2 my-6">
        <img src={logo} alt="logo" />
      </div>
      <h2 className="px-4">
        just add any name in the input and click "search"
      </h2>
    </header>
    <Search />
  </div>
);

export default App;
