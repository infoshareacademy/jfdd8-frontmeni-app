import React, { Component } from 'react'
import ProfileCreator from './ProfileCreator'
import LoginForm from "./LoginScreen";
import firebase from 'firebase'


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
             <LoginForm />
             <ProfileCreator/>
             </div>)
    )
  }
}

export default ProfileChecker