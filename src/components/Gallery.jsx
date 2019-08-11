import React from 'react'
import HouseCard from './HouseCard'
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

const Gallery = ({ zooplaData }) => {
  return (
    <GalleryContainer>
      {zooplaData ? zooplaData.map(property => (
        <HouseCard
          key={property.details_url}
          imageUrl={property.image_url}
          displayableAddress={property.displayable_address}
          price={property.price}
          shortDescription={property.short_description}
          numBathrooms={property.num_bathrooms}
          numBedrooms={property.num_bedrooms}
          detailsUrl={property.details_url}
        />)) : ""
      }
    </GalleryContainer>
  )
}

export default Gallery