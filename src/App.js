import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './Search'
import Gallery from './Gallery';
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: 6rem;
  color: #6A138E;
`

function App() {
  const [searchTerm, setSearchTerm] = useState({search: 'Oxford'})
  const [zooplaData, setZooplaData] = useState([])

  const zooplaApiKey = '6p2r2am6tabxsxb47avcrd9a'
  
  useEffect(() => {
    fetch(`http://api.zoopla.co.uk/api/v1/property_listings.js?area=${searchTerm.search}&api_key=${zooplaApiKey}`)
      .then(response => response.json())
      .then(response => setZooplaData(response.listing))
      .catch(error => console.log('Fetch error: ', error))
  }, [searchTerm])

  return (
    <div className="App">
      <StyledTitle>Zoopstagram</StyledTitle>
      <Search setSearchTerm={setSearchTerm}/>
      <Gallery zooplaData={zooplaData} />
      
<img src="https://www.zoopla.co.uk/static/images/mashery/powered-by-zoopla-150x73.png" width="150" height="73" title="Property information powered by Zoopla" alt="Property information powered by Zoopla" border="0"></img>
    </div>
  );
}

export default App;
