import React, { useState } from 'react'
import TestData from './TestData'
import HouseCard from './HouseCard';
import styled from 'styled-components'

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: baseline;
  width: 100vw;
  max-width: 100%;
  margin: 40px 0 40px 0;
`

const Gallery = () => {
  const [zooplaData, setZooplaData] = useState(TestData)

  return (
    <GalleryContainer>
      {zooplaData.map(property => <HouseCard image_url={property.image_url} displayable_address={property.displayable_address} price={property.price} short_description={property.short_description} num_bathrooms={property.num_bathrooms}/>)}
    </GalleryContainer>
  )
}

export default Gallery