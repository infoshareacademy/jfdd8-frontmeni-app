import React, { Component } from 'react'
import ProfileCreator from './ProfileCreator'

class ProfileChecker extends Component {
  state = {
    profile: true
  }

  render() {
    return (
      <div>
        { this.state.profile ? this.props.children : <ProfileCreator />}
      </div>
    )
  }
}

export default ProfileChecker