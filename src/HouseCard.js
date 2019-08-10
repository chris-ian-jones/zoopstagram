import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components'

const StyledCardDescription = styled(Card.Description)`
  margin: 0 2% 0 2%;
  text-align: left;
`

const HouseCard = ({ image_url, displayable_address, price, short_description, num_bathrooms }) => {
  const numPrice = parseInt(price)
  const short_descriptionLength = short_description.length

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '1,')
  }

  return (
    <Card>
      <Image src={image_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{displayable_address}</Card.Header>
        <Card.Meta>
          <span>{numPrice > 0 ? `£${formatNumber(numPrice)}` : '' }</span>
        </Card.Meta>
        <StyledCardDescription>
          <span>{short_descriptionLength < 600 ? short_description : '' }</span>
        </StyledCardDescription>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='bath' />
          {num_bathrooms}
        </a>
      </Card.Content>
    </Card>
  )
}

export default HouseCard