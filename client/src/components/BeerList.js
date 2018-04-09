import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Glassware from './Glassware';
import { Button } from 'semantic-ui-react';


class BeerList extends Component {
  render() {
    return (
      <div title='Get fancy & find the perfect glass for your beer'>
        <Link to='/glassware'>
          <Button color='white' size='small'>
            Glassware
          </Button>
        </Link>
      </div>
    );
  }
};

export default BeerList;