import React, {Component} from 'react'
import {Icon, Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class NavBar extends Component {
  state = {};


  render() {
    const {activeItem} = this.state;

    return (
      <Menu size='small'>
        <Menu.Item name='food' active={activeItem === 'food'} as={Link} to={'/food'}>
          Food
          <Icon name='food'/>
        </Menu.Item>

        <Menu.Item name='heartbeat' active={activeItem === 'heartbeat'} as={Link} to={'/exercises'}>
          Exercises
          <Icon name='heartbeat'/>
        </Menu.Item>

        <Menu.Item name='Calorie table' active={activeItem === 'Calorie table'} as={Link} to={'/calories'}>
          Calorie table
          <Icon name='table'/>
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
