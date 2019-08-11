import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components'

const StyledCardDescription = styled(Card.Description)`
  margin: 0 2% 0 2%;
  text-align: left;
`
const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const HouseCard = ({ imageUrl, displayableAddress, price, shortDescription, numBathrooms, numBedrooms, detailsUrl }) => {
  const numPrice = parseInt(price)
  const shortDescriptionLength = shortDescription.length

  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return (
    <a href={detailsUrl} target="_blank" rel="noopener noreferrer">
      <Card>
        <Image src={imageUrl} wrapped ui={false} alt="House for sale"/>
        <Card.Content>
          <Card.Header>{displayableAddress}</Card.Header>
          <Card.Meta>
            <span>{numPrice > 0 ? `£${formatNumber(numPrice)}` : "" }</span>
          </Card.Meta>
          <StyledCardDescription>
            <span>{shortDescriptionLength < 600 ? shortDescription : "" }</span>
          </StyledCardDescription>
        </Card.Content>
        <Card.Content extra>
          <IconsContainer>
            <div>
              <Icon name="bath" />
              {numBathrooms}
            </div>
            <div>
              <Icon name="bed" />
              {numBedrooms}
            </div>
          </IconsContainer>
        </Card.Content>
      </Card>
    </a>
  )
}

export default HouseCard