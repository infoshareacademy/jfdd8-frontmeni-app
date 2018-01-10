import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import logo from './app-logo/LO.png'
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'


 class TopNavBar extends Component {
  state = {};

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    // const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item>
          <Image src={logo} size='tiny' floated='left' as={Link} to={'/home'}/>
          {this.props.title}
        </Menu.Item>
        <Menu.Item onClick={() => firebase.auth().signOut()}>
          <Icon name='log out'/>
          Sign Out
        </Menu.Item>
      </Menu>
    )
  }
}
export default TopNavBar