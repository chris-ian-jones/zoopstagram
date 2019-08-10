import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './Search'
import TestData from './TestData'
import HouseCard from './HouseCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  // const [zooplaData, setZooplaData] = useState({
  //   data: TestData
  // })
  const [zooplaData, setZooplaData] = useState(TestData)

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/')
  //     .then(response => response.json())
  //     .then(response => setZooplaData({ zooplaData: response }))
  //     .catch(error => console.log('Fetch error: ', error))
  // }, [searchTerm])

  return (
    <div className="App">
      {console.log('App.js rendered searchTerm: ', searchTerm)}
      {console.log('App.js rendered zooplaData: ', zooplaData)}
      <p>placeholder app</p>
      <Search setSearchTerm={setSearchTerm}/>
      {zooplaData.map(property => <HouseCard image_url={property.image_url} displayable_address={property.displayable_address} price={property.price} short_description={property.short_description} num_bathrooms={property.num_bathrooms}/>)}
      {/* <HouseCard 
        image_url={image_url}
        displayable_address={displayable_address}
        price={price}
        short_description={short_description}
      /> */}
    </div>
  );
}

export default App;
