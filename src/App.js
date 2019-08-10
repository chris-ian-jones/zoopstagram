import React, { useState } from 'react';
import './App.css';
import Search from './Search'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="App">
     <p>placeholder app</p>
     <Search />
    </div>
  );
}

export default App;
