import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import logo from './app-logo/LO.png'
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

 class TopNavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item>
          <Image src={logo} size='tiny' floated='left' as={Link} to={'/home'}/>
          {this.props.title}
        </Menu.Item>
      </Menu>
    )
  }
}
export default TopNavBar