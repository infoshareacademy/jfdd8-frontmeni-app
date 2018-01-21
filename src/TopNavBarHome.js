import React, { Component } from 'react'
import logo from './app-logo/LO.png'
import { Menu, Image } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { signOut } from './state/auth';
import { connect } from 'react-redux'

class TopNavBarHome extends Component {
  state = {};

  render() {
    return (
        <Menu stackable>
          <Menu.Item>
            <Image src={logo} size='tiny' floated='left' />
          </Menu.Item>
        </Menu>
    )
  }
}
export default withRouter(connect(
    state => ({
      user: state.auth.user
    }),
    { signOut }
)(TopNavBarHome))