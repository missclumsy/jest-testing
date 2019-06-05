import React from 'react';
import logo from './logo.svg';
import './App.css';
import Link from './Link';

function App() {
  return (
    <div className="App">
      <Link
        page="https://google.com"
        className="highlighted">
        Lol
      </Link>
    </div>
  );
}

export default App;
