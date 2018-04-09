import React, { Fragment, Title } from 'react';
import { Image } from 'semantic-ui-react';
import Logo from '../images/logo.png';

const Beers = () => (
  <div><Image src={Logo} fluid alt='logo'/></div>
)

const styles = {
  Home: {
  backgroundColor: 'white',
  }
};

export default Beers;

