import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'


class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size='small'>
        <Menu.Item name='food' active={activeItem === 'food'} onClick={this.handleItemClick}>
          <Icon name='food' size='large'/>
          Food
        </Menu.Item>

        <Menu.Item name='video camera' active={activeItem === 'video camera'} onClick={this.handleItemClick}>
          <Icon name='video camera' />
          Channels
        </Menu.Item>

        <Menu.Item name='Calorie table' active={activeItem === 'Calorie table'} onClick={this.handleItemClick}>
          <Icon name='table' />
          Calorie table
        </Menu.Item>

        <Menu.Item name='setting' active={activeItem === 'setting'} onClick={this.handleItemClick}>
          <Icon name='setting' />
          Settings
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar;
