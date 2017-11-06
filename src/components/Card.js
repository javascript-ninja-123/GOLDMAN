import React from 'react';
import { Card } from 'semantic-ui-react'

const CARD = ({question,children}) => {
  return(
    <Card fluid>
     <Card.Content>
       <Card.Header>{question}</Card.Header>
       <Card.Description>
          {children}
       </Card.Description>
     </Card.Content>
   </Card>
  )
}

export default CARD;
