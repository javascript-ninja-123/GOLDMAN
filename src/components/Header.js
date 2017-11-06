import React from 'react';
import { Header } from 'semantic-ui-react';

const HEADER = ({text}) => {
  return(
    <Header as='h3' block textAlign='center'>
        {text}
    </Header>
  )
}

export default HEADER;
