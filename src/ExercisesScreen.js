import React, { Component } from 'react';
import TopNavBar from "./TopNavBar";
import NavBar from "./NavBar";


class ExercisesScreen extends Component {
  render() {
    return (
      <div>
        <TopNavBar title="Customize your daily exercises"/>
        <NavBar/>
      </div>
    )
  }
}
export default ExercisesScreen;

