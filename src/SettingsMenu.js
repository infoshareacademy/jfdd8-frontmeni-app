import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import firebase from 'firebase'


class SettingsMenu extends Component {
  state = { activeItem: 'account' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fluid vertical>
        <Menu.Item onClick={() => firebase.auth().signOut()}>
          <Icon name='log out'/>
          Sign Out
        </Menu.Item>
        <Menu.Item name='BMI' active={activeItem === 'walk'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default SettingsMenu