import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class NavBar extends Component {
  activeItem = (navPath) => {
    return navPath === this.props.location.pathname;
  }

  render() {
    return (
      <div>
        <Menu 
        style={styles.Nav}
        pointing>
          <Link to='/allbeers'>
            <Menu.Item name='Find your beer' />
          </Link>
          <Link to='/allbreweries'>
            <Menu.Item name='Find a Brewery' />
          </Link>
          <Menu.Menu position='right'>
            <Link to='/'>
              <Menu.Item name='Home' />
            </Link>
            <Link to='/instructions'>
              <Menu.Item name='Assessment' />
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

const styles = {
  Nav: {
    backgroundColor: "white",
    width: "100%",
  }
};

export default withRouter(NavBar);
