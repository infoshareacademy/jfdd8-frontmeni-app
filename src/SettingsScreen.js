import React, { Component } from 'react'
import TopNavBar from "./TopNavBar";
import SettingsMenu from './SettingsMenu'

class SettingsScreen extends Component {
  render() {
    return (
      <div>
        <TopNavBar title="Settings"/>
        <SettingsMenu/>
      </div>
    )
  }
}

export default SettingsScreen;