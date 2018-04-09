import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Beer404 from '../images/beer404.jpg';

class NoMatch extends Component {
  render() {
    return (
        <div><Image src={Beer404} fluid alt='Error 404'/></div>
    );
  }
};

export default NoMatch;
