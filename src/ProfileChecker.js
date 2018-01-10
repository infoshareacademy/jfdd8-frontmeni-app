import React, { Component } from 'react'
import ProfileCreator from './RegisterScreen'
import LoginForm from "./LoginScreen"
import firebase from 'firebase'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'LOGIN', render: () => <Tab.Pane><LoginForm /></Tab.Pane> },
  { menuItem: 'REGISTER', render: () => <Tab.Pane><ProfileCreator/></Tab.Pane> },
]


class ProfileChecker extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(
      user => this.setState({ user })
    )
  }

  render() {
    return (
         this.state.user
          ? this.props.children
          : (<div>
             <Tab panes={panes} aligned='right'  defaultActiveIndex={0}/>
             </div>)
    )
  }
}

export default ProfileChecker