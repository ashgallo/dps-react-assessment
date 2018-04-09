import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Locations from './Locations';
import { Button } from 'semantic-ui-react';

class BreweryList extends Component {
  render() {
    return (
      <div title='Breweries'>
        <Link to='/locations'>
          <Button color='#183028' size='small'>
            Take me to Happy Hour!
          </Button>
        </Link>
      </div>
    );
  }
};

export default BreweryList;

