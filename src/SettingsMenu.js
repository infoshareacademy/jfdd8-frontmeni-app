import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import firebase from 'firebase'


class SettingsMenu extends Component {

  render() {

    return (
      <Menu compact widths={2}>
        <Menu.Item onClick={() => firebase.auth().signOut()}>
          <Icon name='log out'/>
          Sign Out
        </Menu.Item>
        <Menu.Item name='BMI'/>
      </Menu>
    )
  }
}

export default SettingsMenu