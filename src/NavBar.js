import React, {Component} from 'react'
import {Icon, Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'



class NavBar extends Component {
  state = {};


  render() {
    const {activeItem} = this.state;

    return (
      <Menu size='large'>
        <Menu.Item name='food' active={activeItem === 'food'} as={Link} to={'/food'}>
          <Icon name='food'/>
          Food
        </Menu.Item>

        <Menu.Item name='heartbeat' active={activeItem === 'heartbeat'} as={Link} to={'/exercises'}>
          <Icon name='heartbeat'/>
          Exercises
        </Menu.Item>

        <Menu.Item name='setting' active={activeItem === 'setting'} as={Link} to={'/settings'}>
          <Icon name='setting'/>
          Settings
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar;
