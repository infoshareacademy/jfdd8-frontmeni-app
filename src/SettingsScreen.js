import React, { Component } from 'react'
import TopNavBar from "./TopNavBar";
import GoalsMenu from "./GoalsMenu";

class SettingsScreen extends Component {
  render() {
    return (
      <div>
        <TopNavBar title="Settings"/>
        <GoalsMenu/>
      </div>
    )
  }
}

export default SettingsScreen;