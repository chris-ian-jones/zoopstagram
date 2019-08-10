import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const HouseCard = ({ image_url, displayable_address, price, short_description, num_bathrooms }) => {
  return (
    <Card>
      <Image src={image_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{displayable_address}</Card.Header>
        <Card.Meta>
          <span>£{price}</span>
        </Card.Meta>
        <Card.Description>
          {short_description}
        </Card.Description>
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