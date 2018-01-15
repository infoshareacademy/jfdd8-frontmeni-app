import React, { Component } from 'react'
import TopNavBar from "./TopNavBar";
import SettingsMenu from './SettingsMenu'
import GoalsMenu from "./GoalsMenu";

class SettingsScreen extends Component {
  render() {
    return (
      <div>
        <TopNavBar title="Settings"/>
        {/*<SettingsMenu/>*/}
        <GoalsMenu/>
      </div>
    )
  }
}

export default SettingsScreen;