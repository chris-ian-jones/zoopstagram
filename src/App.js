import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search'
import Gallery from './components/Gallery'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: 6rem;
  color: #6A138E;
`

function App() {
  const [searchTerm, setSearchTerm] = useState("Oxford")
  const [zooplaData, setZooplaData] = useState([])
  const zooplaApiKey = "6p2r2am6tabxsxb47avcrd9a"
  console.log(searchTerm)

  // hook ensures request to get data from zoopla via api, is only made upon a change of state for 'searchTerm'
  // search term state gets updated upon search button being clicked in search component
  useEffect(() => {
    fetch(`http://api.zoopla.co.uk/api/v1/property_listings.js?area=${searchTerm}&page_size=100&api_key=${zooplaApiKey}`)
      .then(response => response.json())
      .then(response => setZooplaData(response.listing))
      .catch(error => console.log("error: ", error))
  }, [searchTerm])

  return (
    <App className="App">
      <StyledTitle>Zoopstagram</StyledTitle>
      <Search setSearchTerm={setSearchTerm} />
      <Gallery zooplaData={zooplaData} />
      <img
        src="https://www.zoopla.co.uk/static/images/mashery/powered-by-zoopla-150x73.png"
        width="150"
        height="73"
        title="Property information powered by Zoopla"
        alt="Property information powered by Zoopla"
        border="0"
      />
    </App>
  )
}

export default App;
