import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './Search'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [zooplaData, setZooplaData] = useState({
    data: []
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(response => setZooplaData({ zooplaData: response }))
      .catch(error => console.log('Fetch error: ', error))
  }, [searchTerm])

  return (
    <div className="App">
      {console.log('App.js rendered searchTerm: ', searchTerm)}
      {console.log('App.js rendered zooplaData: ', zooplaData)}
     <p>placeholder app</p>
     <Search setSearchTerm={setSearchTerm}/>
    </div>
  );
}

export default App;
