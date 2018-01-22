import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import logo from './app-logo/LO.png'
import {Image, Icon} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'
import {signOut} from './state/auth';
import {connect} from 'react-redux'

class TopNavBarGoals extends Component {
  state = {};

  render() {
    return (
      <Menu icon>
        <Menu.Item as={Link} to={'/settings'} name='chevron left'>
          <Icon name='chevron left'/>
        </Menu.Item>
        <Menu.Item>
          <Image src={logo} size='tiny' floated='left'/>
        </Menu.Item>
        <Menu.Item position='right'>
          {this.props.user && this.props.user.email}
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(connect(
  state => ({
    user: state.auth.user
  }),
  {signOut}
)(TopNavBarGoals))