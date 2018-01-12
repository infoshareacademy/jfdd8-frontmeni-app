import React, { Component } from 'react'
import ProfileCreator from './RegisterScreen'
import LoginForm from "./LoginScreen"
import { connect } from 'react-redux'
import firebase from 'firebase'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'LOGIN', render: () => <Tab.Pane><LoginForm /></Tab.Pane> },
  { menuItem: 'REGISTER', render: () => <Tab.Pane><ProfileCreator/></Tab.Pane> },
];


class Auth extends Component {
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
         this.state.user !== null
          ? this.props.children
          : (<div>
             <Tab panes={panes} aligned='right'  defaultActiveIndex={0}/>
             </div>)
    )
  }
}

export default connect(
  state => ({
    user: state.auth.user
  })
)(Auth)