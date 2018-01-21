import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import logo from './app-logo/LO.png'
import { Image, Icon, Button } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import { signOut } from './state/auth';
import { connect } from 'react-redux'

 class TopNavBar extends Component {
  state = {};

  render() {
    return (
      <Menu stackable>
        <Menu.Item>
          <Button as={Link} to={'/'} name='arrow left'>Go back</Button>
        </Menu.Item>
        <Menu.Item>
          <Image src={logo} size='tiny' floated='left' />
          {this.props.title}
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
)(TopNavBar))