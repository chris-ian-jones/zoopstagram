import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './Search'
import Gallery from './Gallery';
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: 6rem;
  color: purple;
`

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  // const [zooplaData, setZooplaData] = useState({
  //   data: TestData
  // })
  
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/')
  //     .then(response => response.json())
  //     .then(response => setZooplaData({ zooplaData: response }))
  //     .catch(error => console.log('Fetch error: ', error))
  // }, [searchTerm])

  return (
    <div className="App">
      {/* {console.log('App.js rendered searchTerm: ', searchTerm)} */}
      {/* {console.log('App.js rendered zooplaData: ', zooplaData)} */}
      <StyledTitle>Zoopstagram</StyledTitle>
      <Search setSearchTerm={setSearchTerm}/>
      <Gallery />
    </div>
  );
}

export default App;
